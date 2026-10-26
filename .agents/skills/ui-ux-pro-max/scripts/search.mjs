#!/usr/bin/env node
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DATA_DIR = join(__dirname, '..', 'data');

const CSV_CONFIG = {
  style: {
    file: 'styles.csv',
    search_cols: ['Style ID', 'Style Category', 'Aliases', 'Keywords', 'Best For', 'Type', 'AI Prompt Keywords'],
    output_cols: ['Style ID', 'Style Category', 'Aliases', 'Status', 'Parent Style ID', 'Preferred Mode', 'Type', 'Keywords', 'Primary Colors', 'Effects & Animation', 'Best For', 'Light Mode ✓', 'Dark Mode ✓', 'Performance', 'Accessibility', 'Framework Compatibility', 'Complexity', 'AI Prompt Keywords', 'CSS/Technical Keywords', 'Implementation Checklist', 'Design System Variables']
  },
  color: {
    file: 'colors.csv',
    search_cols: ['Product Type', 'Notes'],
    output_cols: ['Product Type', 'Primary', 'On Primary', 'Secondary', 'On Secondary', 'Accent', 'On Accent', 'Background', 'Foreground', 'Card', 'Card Foreground', 'Muted', 'Muted Foreground', 'Border', 'Destructive', 'On Destructive', 'Ring', 'Notes']
  },
  chart: {
    file: 'charts.csv',
    search_cols: ['Data Type', 'Keywords', 'Best Chart Type', 'When to Use', 'When NOT to Use', 'Accessibility Notes'],
    output_cols: ['Data Type', 'Keywords', 'Best Chart Type', 'Secondary Options', 'When to Use', 'When NOT to Use', 'Data Volume Threshold', 'Color Guidance', 'Accessibility Grade', 'Accessibility Risk', 'Accessibility Notes', 'A11y Fallback', 'Library Recommendation', 'Interactive Level']
  },
  landing: {
    file: 'landing.csv',
    search_cols: ['Pattern ID', 'Pattern Name', 'Aliases', 'Keywords', 'Conversion Optimization', 'Section Order'],
    output_cols: ['Pattern ID', 'Pattern Name', 'Aliases', 'Keywords', 'Section Order', 'Primary CTA Placement', 'Color Strategy', 'Conversion Optimization']
  },
  product: {
    file: 'products.csv',
    search_cols: ['Product Type', 'Keywords', 'Primary Style Recommendation', 'Key Considerations'],
    output_cols: ['Product Type', 'Keywords', 'Primary Style Recommendation', 'Secondary Styles', 'Landing Page Pattern', 'Dashboard Style (if applicable)', 'Color Palette Focus']
  },
  ux: {
    file: 'ux-guidelines.csv',
    search_cols: ['Category', 'Issue', 'Description', 'Platform'],
    output_cols: ['Category', 'Issue', 'Platform', 'Description', 'Do', "Don't", 'Code Example Good', 'Code Example Bad', 'Severity']
  },
  typography: {
    file: 'typography.csv',
    search_cols: ['Font Pairing Name', 'Category', 'Mood/Style Keywords', 'Best For', 'Heading Font', 'Body Font'],
    output_cols: ['Font Pairing Name', 'Category', 'Heading Font', 'Body Font', 'Mood/Style Keywords', 'Best For', 'Google Fonts URL', 'CSS Import', 'Tailwind Config', 'Notes']
  },
  icons: {
    file: 'icons.csv',
    search_cols: ['Category', 'Icon Name', 'Keywords', 'Best For', 'Library'],
    output_cols: ['Category', 'Icon Name', 'Keywords', 'Library', 'Import Code', 'Usage', 'Best For', 'Style', 'Semantic Role', 'Allowed Contexts']
  },
  gsap: {
    file: 'motion.csv',
    search_cols: ['Category', 'Intensity Tier', 'Keywords', 'Trigger'],
    output_cols: ['Category', 'Intensity Tier', 'Trigger', 'Duration', 'Easing', 'GSAP Snippet', 'Framework Notes', 'Do', "Don't", 'Performance Notes']
  },
  react: {
    file: 'react-performance.csv',
    search_cols: ['Category', 'Issue', 'Keywords', 'Description'],
    output_cols: ['Category', 'Issue', 'Platform', 'Description', 'Do', "Don't", 'Code Example Good', 'Code Example Bad', 'Severity']
  },
  web: {
    file: 'app-interface.csv',
    search_cols: ['Category', 'Issue', 'Keywords', 'Description'],
    output_cols: ['Category', 'Issue', 'Platform', 'Description', 'Do', "Don't", 'Code Example Good', 'Code Example Bad', 'Severity']
  }
};

const STACK_COLS = {
  search_cols: ['Category', 'Guideline', 'Description', 'Do', "Don't", 'Code Good', 'Code Bad'],
  output_cols: ['Category', 'Guideline', 'Description', 'Do', "Don't", 'Code Good', 'Code Bad', 'Severity', 'Docs URL', 'Applies To', 'Status', 'Verified At']
};

function parseCSV(content) {
  const rows = [];
  let row = [];
  let token = '';
  let insideQuote = false;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];

    if (char === '"') {
      if (insideQuote && nextChar === '"') {
        token += '"';
        i++;
      } else {
        insideQuote = !insideQuote;
      }
    } else if (char === ',' && !insideQuote) {
      row.push(token.trim());
      token = '';
    } else if ((char === '\r' || char === '\n') && !insideQuote) {
      if (char === '\r' && nextChar === '\n') i++;
      row.push(token.trim());
      if (row.some(c => c.length > 0)) {
        rows.push(row);
      }
      row = [];
      token = '';
    } else {
      token += char;
    }
  }
  if (token.length > 0 || row.length > 0) {
    row.push(token.trim());
    if (row.some(c => c.length > 0)) rows.push(row);
  }

  if (rows.length === 0) return [];
  const headers = rows[0];
  return rows.slice(1).map(r => {
    const obj = {};
    headers.forEach((h, idx) => {
      obj[h] = r[idx] || '';
    });
    return obj;
  });
}

function scoreRow(row, searchCols, queryTokens) {
  let score = 0;
  const searchableText = searchCols
    .map(col => (row[col] || '').toLowerCase())
    .join(' ');

  for (const token of queryTokens) {
    if (!token) continue;
    if (searchableText.includes(token)) {
      score += 5;
      // Exact word boundary bonus
      const regex = new RegExp(`\\b${token}\\b`, 'i');
      if (regex.test(searchableText)) score += 5;
    }
  }
  return score;
}

function searchDomain(domainName, query, maxResults = 3) {
  const conf = CSV_CONFIG[domainName];
  if (!conf) return { error: `Unknown domain: ${domainName}` };

  const filePath = join(DATA_DIR, conf.file);
  if (!existsSync(filePath)) return { error: `File not found: ${conf.file}` };

  const content = readFileSync(filePath, 'utf-8');
  const records = parseCSV(content);
  const queryTokens = query.toLowerCase().split(/\s+/).filter(Boolean);

  const scored = records
    .map(r => ({ record: r, score: scoreRow(r, conf.search_cols, queryTokens) }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);

  return {
    domain: domainName,
    file: conf.file,
    query,
    count: scored.length,
    results: scored.map(s => s.record),
    output_cols: conf.output_cols
  };
}

function searchStack(stackName, query, maxResults = 5) {
  const filePath = join(DATA_DIR, 'stacks', `${stackName}.csv`);
  if (!existsSync(filePath)) {
    return { error: `Stack '${stackName}' not found in data/stacks/` };
  }

  const content = readFileSync(filePath, 'utf-8');
  const records = parseCSV(content);
  const queryTokens = query.toLowerCase().split(/\s+/).filter(Boolean);

  const scored = records
    .map(r => ({ record: r, score: scoreRow(r, STACK_COLS.search_cols, queryTokens) }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);

  return {
    stack: stackName,
    file: `stacks/${stackName}.csv`,
    query,
    count: scored.length,
    results: scored.length > 0 ? scored.map(s => s.record) : records.slice(0, maxResults),
    output_cols: STACK_COLS.output_cols
  };
}

// Parse CLI flags
const args = process.argv.slice(2);
let query = '';
let domain = null;
let stack = null;
let isDesignSystem = false;
let maxResults = 3;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--domain' && args[i + 1]) {
    domain = args[++i];
  } else if (args[i] === '--stack' && args[i + 1]) {
    stack = args[++i];
  } else if (args[i] === '--max-results' && args[i + 1]) {
    maxResults = parseInt(args[++i], 10);
  } else if (args[i] === '--design-system') {
    isDesignSystem = true;
  } else if (!args[i].startsWith('-')) {
    query = query ? `${query} ${args[i]}` : args[i];
  }
}

if (!query && !domain && !stack && !isDesignSystem) {
  console.log(`UI/UX Pro Max Search (Node.js engine)
Usage:
  node search.mjs "<query>" --domain <domain>
  node search.mjs "<query>" --stack <stack>
  node search.mjs "<query>" --design-system

Domains: style, color, chart, landing, product, ux, typography, icons, gsap, react, web
Stacks: react, nextjs, vue, svelte, astro, swiftui, react-native, flutter, html-tailwind, shadcn, etc.`);
  process.exit(0);
}

if (stack) {
  const result = searchStack(stack, query || stack, maxResults);
  console.log(`\n## UI Pro Max Stack Guidelines: ${stack.toUpperCase()}`);
  console.log(`Found ${result.count} guidelines for query: "${query}"\n`);
  result.results.forEach((r, idx) => {
    console.log(`### ${idx + 1}. [${r.Category || 'General'}] ${r.Guideline || r.Issue || ''}`);
    if (r.Description) console.log(`**Description:** ${r.Description}`);
    if (r.Do) console.log(`**DO:** ${r.Do}`);
    if (r["Don't"]) console.log(`**DON'T:** ${r["Don't"]}`);
    if (r['Code Good']) console.log(`\`\`\`tsx\n// Good\n${r['Code Good']}\n\`\`\``);
    if (r['Code Bad']) console.log(`\`\`\`tsx\n// Bad\n${r['Code Bad']}\n\`\`\``);
    if (r.Severity) console.log(`*Severity:* ${r.Severity} | *Verified At:* ${r['Verified At'] || 'Active'}\n`);
  });
  process.exit(0);
}

if (domain) {
  const result = searchDomain(domain, query, maxResults);
  console.log(`\n## UI Pro Max Search Results [${domain.toUpperCase()}]`);
  console.log(`Query: "${query}" | Found ${result.count} matches\n`);
  result.results.forEach((r, idx) => {
    const title = r['Style ID'] || r['Product Type'] || r['Font Pairing Name'] || r['Issue'] || r['Data Type'] || r['Pattern Name'] || r['Icon Name'] || `Result ${idx + 1}`;
    console.log(`### ${idx + 1}. ${title}`);
    for (const [k, v] of Object.entries(r)) {
      if (v && v.length > 0) {
        console.log(`- **${k}:** ${v}`);
      }
    }
    console.log('');
  });
  process.exit(0);
}

if (isDesignSystem) {
  console.log(`\n## UI Pro Max Design System Blueprint`);
  console.log(`Target: "${query}"\n`);
  const prodRes = searchDomain('product', query, 1);
  const colorRes = searchDomain('color', query, 1);
  const typeRes = searchDomain('typography', query, 1);

  if (prodRes.results.length > 0) {
    console.log(`### Product Match`);
    console.log(JSON.stringify(prodRes.results[0], null, 2));
  }
  if (colorRes.results.length > 0) {
    console.log(`\n### Color Palette`);
    console.log(JSON.stringify(colorRes.results[0], null, 2));
  }
  if (typeRes.results.length > 0) {
    console.log(`\n### Typography Pairing`);
    console.log(JSON.stringify(typeRes.results[0], null, 2));
  }
  process.exit(0);
}

// Default search ux if no domain
const defaultRes = searchDomain('ux', query, maxResults);
console.log(`\n## UI Pro Max UX Guidelines`);
defaultRes.results.forEach((r, idx) => {
  console.log(`### ${idx + 1}. [${r.Category}] ${r.Issue}`);
  console.log(`- **Description:** ${r.Description}`);
  console.log(`- **Do:** ${r.Do}`);
  console.log(`- **Don't:** ${r["Don't"]}\n`);
});
