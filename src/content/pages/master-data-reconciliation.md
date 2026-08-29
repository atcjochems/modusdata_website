---
title: Solving the Post-M&A Master Data Bottleneck
description: Harmonizing SAP, Dynamics and Salesforce with modern entity resolution.
publishedTime: '2026-08-26'
---

<p class="post-kicker">Data engineering · Operational integration</p>

When companies undergo rapid acquisitions, leadership expects quick synergies across sales, operations and finance. Underneath the surface, engineering and data teams face a glaring operational hurdle: **disparate enterprise systems that simply do not speak to one another.**

Imagine trying to fit two misaligned puzzle pieces together. On one side, legacy enterprise setups like SAP S/4HANA store transactional records with structured Business Partner schemas (`BUT000`). On the other, an acquired unit may run Microsoft Dynamics NAV or Salesforce CRM, with local variants of customer names, localized tax IDs (`USt-IdNr.`, `CREFO`) and inconsistent legal form conventions (`GmbH`, `AG`, `Ltd.`).

Without a unified view of master data, basic business questions become complex challenges:

- *Who are our top 20 global accounts across all acquired subsidiaries?*
- *Are we running duplicate sales campaigns or offering conflicting credit terms to the same customer?*
- *How can we reliably aggregate sales pipelines during M&A integration?*

![SAP and Salesforce data represented as connected puzzle pieces](/img/assets/post_sap_sf_linker/post_img2.jpeg)

## The challenge: why naive matching fails

Manual cleanup or basic exact-string SQL joins fail almost instantly in real-world enterprise environments:

1. **Naming inconsistencies and abbreviations:** “company_name Agribusiness Switzerland AG” in SAP might appear as “company_name Agri Swiss S.A.” or “company_name AG” in an acquired Dynamics NAV or Salesforce instance.
2. **Local identifier discrepancies:** Tax IDs, IBANs and registration numbers are often missing, partially entered or formatted differently across regions.
3. **High volume and computational overhead:** Raw fuzzy matching across millions of customer records creates a severe performance bottleneck.

## The architecture: a deterministic and AI-assisted pipeline

To solve this sustainably without expensive legacy MDM lock-in, we build lightweight, scalable, local Python-native entity resolution pipelines using tools such as `pandas`, `polars`, `DuckDB` and modern LLM capabilities.

![Automated data reconciliation pipeline architecture](/img/assets/post_sap_sf_linker/post_img1.jpeg)

### 1. Data profiling and normalization

Before comparing records, standardize the input attributes:

- **Legal form extraction:** Strip and categorize company suffixes such as `GmbH`, `AG`, `Co. KG` and `Inc.`
- **Address and phone normalization:** Standardize international country codes, postcodes and street abbreviations.
- **String cleaning:** Lowercase, remove special characters and convert localized characters, for example German umlauts (`ä/ö/ü`) to (`ae/oe/ue`).

### 2. Record blocking and grouping

To avoid checking every SAP record against every Dynamics NAV or Salesforce record, apply blocking strategies. Group entities by geographic region, postal code, phonetic index such as Metaphone or Soundex, or normalized prefix keys. This can narrow candidate pairs by more than 95 percent and drastically reduce compute overhead.

### 3. Multi-feature similarity scoring

Candidates within each block pass through a multi-feature scoring engine:

- **Jaro-Winkler and Levenshtein distance:** Weigh similarity across company names.
- **Exact matching rules:** Cross-check hard identifiers such as `USt-IdNr.`, `CREFO`, `IBAN` or domestic commercial registry IDs.
- **Token set ratio and cosine similarity:** Handle word-order permutations such as “Logistics Global GmbH” and “Global Logistics GmbH”.

### 4. Deterministic classification and LLM escalation

Instead of relying purely on fixed thresholds, implement a multi-tiered decision gate:

- **High confidence, auto-merge:** High similarity with matching tax or registration IDs. Tag the match in the cross-reference table.
- **Uncertain cases, LLM escalation:** Send borderline scores to an LLM agent, such as Claude or OpenAI through custom prompt templates, to assess whether profiles represent the same legal entity.
- **Low confidence, reject:** Classify the records as distinct entities.

```python
# Conceptual Python workflow (DuckDB / Polars + entity scoring)
import polars as pl
from rapidfuzz import fuzz

def calculate_entity_similarity(record_sap, record_crm):
    name_score = fuzz.token_sort_ratio(record_sap["company_name"], record_crm["company_name"])
    vat_match = 1.0 if record_sap["vat_id"] and record_sap["vat_id"] == record_crm["vat_id"] else 0.0
    return (name_score * 0.7) + (vat_match * 30.0)
```

### 5. Reviewer UI and human-in-the-loop validation

For compliance and edge-case validation, ambiguous pairs escalated by the system are exposed through a lightweight local dashboard, for example Streamlit. Data stewards can approve or reject matches with a single click, creating feedback that improves the scoring weights over time.

## Business impact and results

- **Accelerated time-to-value in M&A:** Customer data integration timelines shrink from months to days.
- **Single source of truth:** Cross-selling metrics become clear across SAP S/4HANA, Salesforce and Microsoft Dynamics datasets.
- **Cost efficiency:** Modular Python libraries such as `polars`, `DuckDB` and `recordlinkage` avoid six-figure enterprise MDM platform licenses.

> The strongest integration outcomes come from treating entity resolution as a governed product: measurable, reviewable and built for change.

[Discuss a data integration challenge](mailto:arthur@modusdata.ch)
