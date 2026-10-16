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

[Launch the interactive demo](https://bloodiron.streamlit.app/)

The app is an independent implementation based on the openly licensed paper (CC BY 4.0), and is not affiliated with the study authors.

## Open-source implementation

The notebooks, application and model pipeline are available under the MIT license. The repository includes logistic regression and XGBoost classifiers for iron-risk categories, an explicit IRON-5 scoring implementation, and the Streamlit interface.

[View the code on GitHub](https://github.com/atcjochems/modusdata_blood_iron)

## Reference

<ol>
  <li id="ref1">Vinge F, Stubbendorff A, Borgström Bolmsjö B, Jakobsson U, Milos Nymberg V, Wolff M. Screening for iron deficiency in young women: the predictive validity of a five-item screening instrument (IRON-5). <em>Scandinavian Journal of Primary Health Care</em>. 2026;44(1):2649329. <a href="https://doi.org/10.1080/02813432.2026.2649329" target="_blank" rel="noopener">doi:10.1080/02813432.2026.2649329</a>.</li>
</ol>

<p class="post-disclaimer">This article and its accompanying app are for educational purposes only. They are not medical devices and do not replace clinical assessment, laboratory testing or medical advice.</p>