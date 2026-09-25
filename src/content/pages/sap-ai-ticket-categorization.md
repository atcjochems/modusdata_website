---
title: "A hybrid BTP/Azure architecture for agentic AI integration into SAP"
description: How Modus Data combines SAP BTP Clean Core principles with Azure Container Apps and LangGraph to classify enterprise support tickets.
publishedTime: '2026-09-20'
---

Enterprise support teams often have to route thousands of complex SAP requests across dozens of technical categories. Manual triage slows resolution, while sending every ticket directly to a large language model introduces avoidable latency, cost, and governance risk.

At **Modus Data**, we designed a production-grade classification funnel that keeps SAP S/4HANA clean, separates enterprise integration from AI compute, and runs all three classification stages inside one **LangGraph orchestration service** hosted on **Azure Container Apps**.

![Decoupled SAP and Azure AI architecture for support ticket categorization](/img/assets/post_sap_ai_ticketing/hero%20sap%20azure.jpeg)

## The architectural challenge

The solution had to satisfy three constraints at the same time:

- **ERP integrity:** Custom logic inside SAP S/4HANA would increase upgrade risk and work against SAP's Clean Core strategy.
- **Speed and cost:** Deterministic rules are fast but limited; an LLM call for every ticket is unnecessarily expensive and slow.
- **Security and identity:** Support tickets can contain sensitive operational details and PII, so the pipeline needs private networking, strong service identity, and no long-lived secrets in application code.

## The decoupled classification funnel

SAP S/4HANA emits a ticket event to **SAP BTP Event Mesh**. A **CAP adapter** validates and normalizes the payload before handing it to a unified **LangGraph orchestration service** hosted on **Azure Container Apps** over **mTLS** and **OAuth JWT**. That single graph owns the complete ordered path: rules first, vector preselection second, and LLM classification with **Instructor-validated structured output** last.

![Three-tier SAP support ticket classification funnel](/img/assets/post_sap_ai_ticketing/sap-ai-ticketing-pipeline.svg)

### Stage 1: deterministic rules

The first **LangGraph node** applies **regex**, **metadata**, and hard business rules. Obvious cases resolve locally in under 10 ms. These rules are transparent, easy to test, and provide a stable first line of defense against unnecessary model calls.

### Stage 2: vector preselection

Only tickets not caught by the rules node continue through the graph. The **vector matching node** embeds those tickets and compares them against historical, labeled cases in **Azure AI Search** or **Azure Database for PostgreSQL with `pgvector`**. Similarity thresholds preselect plausible categories and provide focused context for the final classifier; vector matching does not make the final decision.

### Stage 3: LLM classification and structured output

The same **LangGraph service** sends the preselected candidates and supporting evidence to an **LLM** for classification. **Instructor** validates the response against a typed schema and generates the structured output containing the category, confidence, rationale, and evidence references. The workflow is bounded by explicit tools and a schema rather than open-ended model output. Full execution traces, from rule hits to agent tool calls, are captured via **OpenTelemetry** and **LangWatch/LangSmith** for real-time auditability and prompt evaluation.

## Clean Core and asynchronous reliability

The SAP core remains untouched. Event Mesh, rate limiting, queues, and dead-letter retries sit in the BTP integration layer, so ticket creation is not coupled to container availability or model response time. This also gives operations teams a durable place to replay failed messages and inspect delivery state.

On Azure, one **Container App** hosts the Python LangGraph orchestration service and all three stages, scaling toward zero outside peak periods. The app can call private VNet-connected **Azure ML** or dedicated **vLLM GPU endpoints** for the LLM stage. **Entra ID managed identities** authenticate service-to-service calls without hardcoded API keys.

## Business outcomes

The funnel is designed to deliver measurable operational value:

- **Sub-200 ms triage** for high-confidence rules and vector-preselected tickets.
- **65% lower LLM compute spend** by reserving deep reasoning for ambiguous cases.
- **100% Clean Core compliance** with zero modifications to SAP S/4HANA.
- **Reliable peak handling** through asynchronous queues, retries, and independently scaling compute tiers.

## Architecture principles that transfer

This pattern is useful beyond ticket categorization. Any enterprise workflow that combines a governed system of record with expensive AI reasoning can benefit from the same separation: keep the source system stable, put policy and delivery guarantees at the integration boundary, and make model escalation an explicit business decision.

---

**Ready to modernize your enterprise SAP and AI stack?**

[Schedule an architectural advisory call with Modus Data](https://modusdata.ch/contact).