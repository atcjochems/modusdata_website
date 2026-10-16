---
title: 'Iron Deficiency Can Hide in Plain Sight: A Screening Demo'
description: 'A practical look at IRON-5, a five-question screening instrument, and an open-source demo exploring how people at risk of iron deficiency might be identified before anemia develops.'
publishedTime: '2026-10-16'
---

<p class="post-kicker">Healthcare AI · Clinical data science · Open-source demo</p>

![Clinical screening concept for anemia and iron status using routine blood counts, the IRON-5 questionnaire and a predictive model](/img/assets/post_blood_iron/hero_image.jpg)

*Iron stores can be low before hemoglobin indicates anemia. Screening tools may help guide who should discuss confirmatory testing with a clinician.*

## The gap routine blood work can miss

Hemoglobin is an important measure for detecting anemia. But it is a late signal of iron depletion: iron stores may be low while hemoglobin remains above the anemia threshold. Serum ferritin is commonly used to assess iron stores, but it is not included in every routine check-up.

In a Swedish study of 483 high-school girls, 183 (38%) had ferritin below 15 µg/L. Among those participants, only 17.6% met the study's definition of anemia. In that study population, a hemoglobin-only check would therefore have missed many cases of low ferritin.<sup><a href="#ref1">[1]</a></sup>

That finding raises a practical question: can a short, transparent screening instrument help identify who may benefit from discussing a ferritin test with a healthcare professional?

## A five-question approach

IRON-5 is a five-item instrument developed from a cross-sectional study of girls aged 16–19 in Malmö and Lund, Sweden. It assigns one point to each of five reported factors: excluding red meat, not taking iron-containing supplements, heavy menstrual bleeding, not using hormonal contraception, and avoiding activities during heavy menstrual days.<sup><a href="#ref1">[1]</a></sup>

In the development sample, a score of three or more had 74% sensitivity and 57% specificity for ferritin below 15 µg/L (AUC 0.72). Those figures describe the study's development sample; they are not a guarantee of performance in other settings or populations.

IRON-5 is a **triage aid, not a diagnosis**. A positive result does not establish iron deficiency, and a low score cannot rule it out. A healthcare professional can assess symptoms and decide whether confirmatory testing is appropriate.

## What the evidence does not establish

- **External validation is still needed.** The score was derived from one study population; its performance should be evaluated in independent cohorts.
- **The study population was narrow.** It included girls aged 16–19 who menstruate. The results should not be assumed to apply to other ages or populations.
- **The cutoff matters.** The study defined iron deficiency as ferritin below 15 µg/L. Other proposed thresholds may classify more people as iron deficient.
- **Screening benefit remains an open question.** The study evaluates predictive validity; it does not establish that population screening or treating screen-detected, symptom-free deficiency improves outcomes.

## Explore the demo

I built an educational web app that pairs an implementation of the published IRON-5 scoring rule with a separate, lightweight machine-learning demonstration using CBC-derived features. The app is intended to make the approaches tangible, not to provide medical advice or a clinically validated prediction.

<div class="hero-actions">
  <a class="btn btn-primary" href="https://bloodiron.streamlit.app/" target="_blank" rel="noopener noreferrer">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 3h7v7M21 3l-9 9" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
    Launch the interactive demo
  </a>
</div>

The app is an independent implementation based on the openly licensed paper (CC BY 4.0), and is not affiliated with the study authors.

## Open-source implementation

The notebooks, application and model pipeline are available under the MIT license. The repository includes logistic regression and XGBoost classifiers for iron-risk categories, an explicit IRON-5 scoring implementation, and the Streamlit interface.

<div class="hero-actions">
  <a class="btn btn-primary" href="https://github.com/atcjochems/modusdata_blood_iron" target="_blank" rel="noopener noreferrer">
    <svg class="btn-icon-solid" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.13 3.01.4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12C24 5.37 18.63 0 12 0Z" /></svg>
    View the code on GitHub
  </a>
</div>

## Reference

<ol>
  <li id="ref1">Vinge F, Stubbendorff A, Borgström Bolmsjö B, Jakobsson U, Milos Nymberg V, Wolff M. Screening for iron deficiency in young women: the predictive validity of a five-item screening instrument (IRON-5). <em>Scandinavian Journal of Primary Health Care</em>. 2026;44(1):2649329. <a href="https://doi.org/10.1080/02813432.2026.2649329" target="_blank" rel="noopener">doi:10.1080/02813432.2026.2649329</a>.</li>
</ol>

<p class="post-disclaimer">This article and its accompanying app are for educational purposes only. They are not medical devices and do not replace clinical assessment, laboratory testing or medical advice.</p>