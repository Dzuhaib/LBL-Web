'use client';

import { useState } from 'react';

interface Service {
  id: string;
  name: string;
  description?: string;
  duration?: string;
  price?: string;
  bookable?: boolean;
}

interface Category {
  letter: string;
  name: string;
  services: Service[];
}

const categories: Category[] = [
  {
    letter: '✨',
    name: 'Glow Into September',
    services: [
      { id: 'glow-1', name: 'Dissolve & Refill Lip Filler package 💉', duration: '15 minutes', price: '£148.00', description: 'This package includes the dissolving of existing lip filler, followed by a fresh lip filler treatment once the lips have fully settled.' },
      { id: 'glow-2', name: 'Glow Back Package, 3 Area\'s Anti Wrinkle - Skin Booster', duration: '25 minutes', price: '£197.00', description: 'The perfect combination for a smoother, fresher and more radiant complexion!' },
      { id: 'glow-3', name: '💉 3.3ML FILLER & 3 AREA\'S ANTI-WRINKLE FACIAL REFRESH', duration: '30 minutes', price: '£317.00', description: 'This treatment includes 3.3ml of dermal filler, strategically placed across the cheeks, chin, lips and nasolabial folds.' },
      { id: 'glow-4', name: 'The Volume Rebalance 3.3ml filler package 💉', duration: '25 minutes', price: '£199.00', description: 'Feeling like your face has lost volume or definition?' },
      { id: 'glow-5', name: '🍂✨ September Rejuvenation BIO STIMULATOR £160', duration: '15 minutes', price: '£160.00', description: 'A skin-rejuvenating treatment designed to stimulate your skin\'s natural collagen production.' },
      { id: 'glow-6', name: 'Glow into Autumn, 3 Area\'s Anti-Wrinkle, 0.5ml lips, Skin booster🍂', duration: '30 minutes', price: '£217.00', description: 'The perfect autumn refresh!' },
      { id: 'glow-7', name: '✨ THE DEFINED JAW – ENDO FIBRE LIFT', duration: '30 minutes', price: '£177.00', description: 'Want a more defined, sculpted jawline?' },
      { id: 'glow-8', name: '✨ THE DOUBLE DEFINE 2 AREAS – ENDO FIBRE LIFT ✨', duration: '45 minutes', price: '£299.00', description: 'Choose 1 area on each side and receive the second area of each side FREE.' },
      { id: 'glow-9', name: '👯‍♀️✨ BRING A BESTIE – ENDO FIBRE LIFT', duration: '45 minutes', price: '£408.00', description: 'Bring your bestie and you both receive 1 area on each side. PRICE INCLUDES BOTH OF YOU.' },
      { id: 'glow-10', name: '3 Area Endo Fibre Lift, 💥', duration: '45 minutes', price: '£397.00', description: 'This treatment includes 3 areas of Endo Fibre Lift.' },
      { id: 'glow-11', name: 'THE ULTIMATE 360° ENDO FIBRE LIFT 💥', duration: '1 hour 10 minutes', price: '£577.00', description: 'Our ultimate multi-area transformation. INCLUDES 4 AREAS ON EACH SIDE - 8 areas in total.' },
      { id: 'glow-12', name: 'The radiance reset micro-needling ✨ + FREE BIODANCE KOREAN MASK', duration: '45 minutes', price: '£89.00', description: 'A skin-refreshing treatment including a deep cleanse, micro-needling + LED light therapy.' },
      { id: 'glow-13', name: '👯Bring bestie IV X2💧', duration: '1 hour', price: '£177.00', description: 'Enjoy 2 IV drips together. PRICE INCLUDES BOTH OF YOU!' },
      { id: 'glow-14', name: 'The Rebirth Ritual🧛🩸 - Vampire facial PRP', duration: '45 minutes', price: '£107.00', description: 'A skin-rejuvenating treatment using your own platelet-rich plasma (PRP).' },
      { id: 'glow-15', name: 'Reset IV Revive Drip💧', duration: '1 hour', price: '£79.00', description: 'Our IV Revive Drip delivers vitamins and nutrients directly into the bloodstream.' },
      { id: 'glow-16', name: '🍂 Ultimate autumn lift full face HIFU + Under chin free 🍂', duration: '40 minutes', price: '£157.00', description: 'Our full-face HIFU treatment uses focused ultrasound energy.' },
      { id: 'glow-17', name: 'The ink reset 🔥 – buy 4 tattoo removal sessions get 1 free', duration: '15 minutes', price: '£60.00', description: 'Buy 4 tattoo removal sessions and get your 5th FREE!' },
      { id: 'glow-18', name: 'September sculpt💆✨ – lower face HIFU for a snatched jaw', duration: '20 minutes', price: '£97.00', description: 'HIFU uses focused ultrasound technology to help tighten and lift the lower face.' },
      { id: 'glow-19', name: 'New season, New growth 🧬 – PRP Hair restoration', duration: '45 minutes', price: '£127.00', description: 'Our new PRP Hair Restoration treatment.' },
      { id: 'glow-20', name: 'Eye Revival👀 – PRP new treatment, upper and lower eyes', duration: '35 minutes', price: '£97.00', description: 'A rejuvenating treatment for the upper + lower eye area.' },
      { id: 'glow-21', name: '👯‍♀️ 2x besties Korean Lash Lifts', duration: '2 hours', price: '£50.00', description: 'Perfect to share with your bestie or book 2 lash lifts for yourself!' },
      { id: 'glow-22', name: 'Korean Lash Lift — £30 👁️', duration: '45 minutes', price: '£30.00', description: 'A Korean Lash Lift gently lifts, curls and enhances your natural lashes.' },
      { id: 'glow-23', name: 'The More Awake Package — Korean lash lift - Brow lamination Combo £38 ✨', duration: '1 hour', price: '£38.00', description: 'A Korean Lash Lift with Brow Lamination.' },
    ],
  },
  {
    letter: 'D',
    name: 'Dermal Filler',
    services: [
      { id: 'df-1', name: 'Lip Filler 0.5ml', duration: '15 minutes', price: '£90.00', description: '0.5ml Lip' },
      { id: 'df-2', name: 'Lip Filler 1.1ml', duration: '15 minutes', price: '£130.00', description: '1.1ml' },
      { id: 'df-3', name: 'Ultra Flat Lips 1.5ML', duration: '30 minutes', price: '£150.00', description: 'Only available for clients with minimal or no lip filler' },
      { id: 'df-4', name: 'Nasal Folds 1.1ml', duration: '15 minutes', price: '£130.00', description: '1.1ml' },
      { id: 'df-5', name: 'Jaw Filler 0.5ml', duration: '15 minutes', price: '£90.00', description: '0.5ml' },
      { id: 'df-6', name: 'Jaw Filler 1.1ml', duration: '15 minutes', price: '£130.00', description: '1.1ml' },
      { id: 'df-7', name: 'Cheek Filler 0.5ml', duration: '15 minutes', price: '£90.00', description: '0.5ml' },
      { id: 'df-8', name: 'Cheek Filler 1.1ml', duration: '20 minutes', price: '£130.00', description: '1.1ml' },
      { id: 'df-9', name: 'Chin Filler 0.5ml', duration: '20 minutes', price: '£90.00', description: '0.5ml' },
      { id: 'df-10', name: 'Chin Filer 1.1ml', duration: '15 minutes', price: '£130.00', description: '1.1ml' },
      { id: 'df-11', name: 'Contour Package 2.2ml', duration: '30 minutes', price: '£200.00', description: '2.2ml' },
      { id: 'df-12', name: 'Contour Package 3.3ml', duration: '30 minutes', price: '£290.00', description: '3.3ml' },
      { id: 'df-13', name: 'Contour Packages 4.4ml', duration: '30 minutes', price: '£380.00', description: '4.4ml' },
      { id: 'df-14', name: 'Contour Packages 5.5ml', duration: '30 minutes', price: '£470.00', description: '5.5ml' },
      { id: 'df-15', name: 'The Kim K Contour (5ml) Package', duration: '30 minutes', price: '£399.00', description: '5ml filler contour package!' },
      { id: 'df-16', name: 'Non-surgical rhinoplasty', duration: '30 minutes', price: '£150.00', description: '' },
      { id: 'df-17', name: 'Lip Dissolving', duration: '20 minutes', price: '£70.00', description: '' },
    ],
  },
  {
    letter: 'L',
    name: 'Line Reducer',
    services: [
      { id: 'lr-1', name: 'Line Reducer 3 Area\'s (Crows, Frowns and Forehead)', duration: '30 minutes', price: '£200.00', description: '' },
      { id: 'lr-2', name: 'Line Reducer 2 Area\'s', duration: '30 minutes', price: '£160.00', description: '' },
      { id: 'lr-3', name: 'Line Reducer 1 Area', duration: '30 minutes', price: '£120.00', description: '' },
      { id: 'lr-4', name: 'Top-up', duration: '10 minutes', price: '£20.00', description: '' },
      { id: 'lr-5', name: 'Lip flip, Gummy smile, Down turn mouth, Jelly roll, Bunny lines or Chin dimple', duration: '30 minutes', price: '£70.00', description: '' },
      { id: 'lr-6', name: 'Masseter', duration: '30 minutes', price: '£150.00', description: 'slims jawline and stops teeth grinding' },
      { id: 'lr-7', name: 'Jowls', duration: '30 minutes', price: '£100.00', description: '' },
      { id: 'lr-8', name: 'Neck tightening/lift', duration: '30 minutes', price: '£175.00', description: 'lifts sagging of the neck' },
      { id: 'lr-9', name: 'Nose slimming', duration: '30 minutes', price: '£120.00', description: '' },
      { id: 'lr-10', name: 'Hyperhidrosis/Armpits', duration: '30 minutes', price: '£200.00', description: 'stops sweating' },
      { id: 'lr-11', name: 'Traptox', duration: '30 minutes', price: '£150.00', description: 'Lengthens/slims the neck, and eases neck pain' },
    ],
  },
  {
    letter: 'L',
    name: 'Laser Hair Removal',
    services: [
      { id: 'lhr-1', name: 'Laser Hair Removal', duration: '', price: '', description: 'A patch test is required. PLEASE ENSURE THAT ALL AREAS ARE SHAVED BEFOREHAND.' },
      { id: 'lhr-2', name: 'Chin and Upper Lip', duration: '20 minutes', price: '£50.00', description: '' },
      { id: 'lhr-3', name: 'Chin or Upper Lip', duration: '20 minutes', price: '£30.00', description: '' },
      { id: 'lhr-4', name: 'Full face', duration: '30 minutes', price: '£65.00', description: '' },
      { id: 'lhr-5', name: 'Bikini Line', duration: '30 minutes', price: '£70.00', description: '' },
      { id: 'lhr-6', name: 'Brazilian', duration: '30 minutes', price: '£80.00', description: '' },
      { id: 'lhr-7', name: 'Hollywood', duration: '35 minutes', price: '£90.00', description: '' },
      { id: 'lhr-8', name: 'Full Leg (feet included)', duration: '45 minutes', price: '£90.00', description: '' },
      { id: 'lhr-9', name: 'Half Leg', duration: '35 minutes', price: '£60.00', description: '' },
      { id: 'lhr-10', name: 'Under Arms', duration: '30 minutes', price: '£55.00', description: '' },
      { id: 'lhr-11', name: 'Full Arms (hands included)', duration: '30 minutes', price: '£80.00', description: '' },
      { id: 'lhr-12', name: 'Half Arms', duration: '30 minutes', price: '£60.00', description: '' },
      { id: 'lhr-13', name: 'Chest (including nipples)', duration: '30 minutes', price: '£65.00', description: '' },
      { id: 'lhr-14', name: 'Stomach', duration: '30 minutes', price: '£60.00', description: '' },
      { id: 'lhr-15', name: 'Shoulders and Upper back', duration: '30 minutes', price: '£40.00', description: '' },
      { id: 'lhr-16', name: 'Full back and Shoulders', duration: '30 minutes', price: '£60.00', description: '' },
    ],
  },
  {
    letter: 'L',
    name: 'Lashes and Eyebrows',
    services: [
      { id: 'le-1', name: 'Korean lash lift with tint', duration: '50 minutes', price: '£30.00', description: '' },
      { id: 'le-2', name: 'EYEBROW LAMINTION WITH TINT & WAX', duration: '1 hour', price: '£28.00', description: 'Brow lamination smooths and lifts the brow hairs into place, giving the appearance of fuller, fluffier, and more symmetrical brows.' },
      { id: 'le-3', name: 'EYEBROW WAX & TINT', duration: '30 minutes', price: '£12.00', description: 'Brow tinting adds natural-looking colour to the brows, enhancing their shape and giving a fuller, more defined appearance.' },
      { id: 'le-4', name: 'EYEBROW WAX', duration: '15 minutes', price: '£10.00', description: '' },
      { id: 'le-5', name: 'HYBRID STAIN & WAX', duration: '30 minutes', price: '£16.00', description: 'A hybrid stain tint is an advanced brow colouring treatment that tints both the brow hairs and the skin beneath them.' },
      { id: 'le-6', name: 'KOREAN LASH LIFT & TINT AND BROW WAX AND TINT COMBO', duration: '1 hour', price: '£35.00', description: 'Refresh your eyes with our Korean-inspired lash and brow treatment.' },
      { id: 'le-7', name: 'KOREAN LASH LIFT WITH TINT & BROW LAMINATION WAX-TINT', duration: '1 hour', price: '£45.00', description: '' },
    ],
  },
  {
    letter: 'E',
    name: 'ENDO Fibre Lift tm',
    services: [
      { id: 'ef-1', name: 'ENDO Fibre Lift tm', duration: '', price: '', description: 'Endolift offers a remarkable alternative to surgical skin rejuvenating, tightening, and fat reduction. This revolutionary laser is suitable for the face and body it delivers impressive results with no...' },
      { id: 'ef-2', name: 'Mid lower face no jowls', duration: '30 minutes', price: '£400.00', description: 'Please arrive 15 minutes early.' },
      { id: 'ef-3', name: 'Jowls', duration: '45 minutes', price: '£290.00', description: 'Please arrive 15 minutes early.' },
      { id: 'ef-4', name: 'Mid lower face - including jowls', duration: '45 minutes', price: '£450.00', description: 'Please arrive 15 minutes early.' },
      { id: 'ef-5', name: 'Under chin', duration: '45 minutes', price: '£250.00', description: 'Please arrive 15 minutes early.' },
      { id: 'ef-6', name: 'Neck', duration: '45 minutes', price: '£350.00', description: 'Please arrive 15 minutes early.' },
      { id: 'ef-7', name: 'Eyebrow', duration: '45 minutes', price: '£250.00', description: 'Please arrive 15 minutes early.' },
      { id: 'ef-8', name: 'Under eye', duration: '45 minutes', price: '£250.00', description: 'Please arrive 15 minutes early.' },
      { id: 'ef-9', name: 'Inner arm', duration: '45 minutes', price: '£450.00', description: 'Please arrive 15 minutes early.' },
      { id: 'ef-10', name: 'Abdomen and peri umbilical area', duration: '45 minutes', price: '£450.00', description: 'Please arrive 15 minutes early.' },
      { id: 'ef-11', name: 'Inner thigh', duration: '45 minutes', price: '£450.00', description: 'Please arrive 15 minutes early.' },
      { id: 'ef-12', name: 'Knee', duration: '45 minutes', price: '£300.00', description: 'Please arrive 15 minutes early.' },
      { id: 'ef-13', name: 'Bum', duration: '45 minutes', price: '£450.00', description: 'Please arrive 15 minutes early.' },
      { id: 'ef-14', name: 'ENDOFibreLift Review', duration: '25 minutes', price: '', description: 'Please note that if you cancel your Endo Fibre Lift review appointment, unfortunately we will not be able to carry out another review.' },
    ],
  },
  {
    letter: 'S',
    name: 'Skin Boosters',
    services: [
      { id: 'sb-1', name: 'Under Eye Polynucleotide', duration: '15 minutes', price: '£97.00', description: 'Polynucleotides are DNA fragments, used for the under eye to repair damaged skin, improve skin elasticity, increase hydration and reduce dark circles and fine lines!' },
      { id: 'sb-2', name: 'Skin Boosters with NAD', duration: '15 minutes', price: '£97.00', description: 'NAD Skin Boosters are different from traditional boosters, while hyaluronic acid adds moisture NAD repairs and strengthens skin cells.' },
      { id: 'sb-3', name: 'Revitrane Skin Booster', duration: '20 minutes', price: '£79.00', description: '' },
    ],
  },
  {
    letter: 'S',
    name: 'Scalp Micro-Pigmentation',
    services: [
      { id: 'sm-1', name: 'Scalp Micro-Pigmentation', duration: '1 hour', price: '£150.00', description: '' },
    ],
  },
  {
    letter: 'S',
    name: 'Services',
    services: [
      { id: 'sv-1', name: 'Platelet Rich Fibrin Injections', duration: '1 hour', price: '£200.00', description: '3 bulk sessions £525', bookable: false },
      { id: 'sv-2', name: 'Platelet Rich Fibrin Hair Loss Injections', duration: '1 hour', price: '£250.00', description: '3 bulk sessions £600', bookable: false },
      { id: 'sv-3', name: 'FOR STUDENT ONLY', duration: '10 minutes', price: '£1,251.00', description: 'FOR STUDENT ONLY', bookable: true },
      { id: 'sv-4', name: 'FOR STUDENT ONLY LASER', duration: '3 minutes', price: '£3,500.00', description: '', bookable: true },
    ],
  },
  {
    letter: 'S',
    name: 'SPIDER VEIN REMOVAL',
    services: [
      { id: 'svr-1', name: 'Spider Vein Removal- Small Area', duration: '35 minutes', price: '£157.00', description: '' },
      { id: 'svr-2', name: 'Spider Vein Removal - Medium Area', duration: '45 minutes', price: '£257.00', description: '' },
      { id: 'svr-3', name: 'Spider Vein Removal - Large Area', duration: '1 hour', price: '£397.00', description: '' },
    ],
  },
  {
    letter: 'F',
    name: 'Facials',
    services: [
      { id: 'fa-1', name: 'Microneedling with NAD', duration: '45 minutes', price: '£77.00', description: 'This will repair DNA damage and helps with anti ageing at cellular level.' },
      { id: 'fa-2', name: 'Express Chemical Peel', duration: '30 minutes', price: '£45.00', description: 'Includes - Full cleanse with steam and a face mask' },
      { id: 'fa-3', name: 'Express Microneedling', duration: '30 minutes', price: '£45.00', description: 'Includes - Full cleanse with steam, extraction, dermaplaning and microneedling' },
      { id: 'fa-4', name: 'Carbon Facial', duration: '30 minutes', price: '£60.00', description: '' },
      { id: 'fa-5', name: 'Skin Rejuvenation', duration: '45 minutes', price: '£65.00', description: '' },
      { id: 'fa-6', name: 'Glass Facial', duration: '1 hour', price: '£99.00', description: '' },
      { id: 'fa-7', name: 'Luxury Microneedling Facical', duration: '45 minutes', price: '£60.00', description: 'Pigmentation, Fine lines and wrinkles, Dull/tired looking skin, Scarring, Removal of peach fuzz.' },
      { id: 'fa-8', name: 'Luxury Chemical Peel', duration: '45 minutes', price: '£60.00', description: 'Includes - Full cleanse with steam, extraction, dermaplaning and mask.' },
      { id: 'fa-9', name: 'Express Dermaplaning', duration: '20 minutes', price: '£20.00', description: 'Includes - a facial cleanse plus dermaplaning to remove peach fuzz.' },
      { id: 'fa-10', name: 'Luxury Dermaplaning', duration: '40 minutes', price: '£40.00', description: 'Luxury Dermaplaning includes a deep cleanse with steam, extraction, facial and mask' },
      { id: 'fa-11', name: 'Signature Hyrafacials - non invasive', duration: '45 minutes', price: '£68.00', description: 'Deep cleanse, Steam, Dermaplaning, Suction, Exfoliation, Microdermabrasion, Radio frequency, LED mask' },
      { id: 'fa-12', name: 'Basic Hrdrafacial', duration: '30 minutes', price: '£48.00', description: 'Deep cleanse, Steam, Suction, Exfoliation, Microdermabrasion, Radio frequency' },
      { id: 'fa-13', name: 'Hydrafacial with Microneedling', duration: '1 hour', price: '£108.00', description: 'Deep cleanse, Steam, Dermaplaning, Suction, Exfoliation, Microdermabrasion, Radio frequency, Microneedling, LED mask' },
      { id: 'fa-14', name: 'Hydrafacial with a Chemical peel', duration: '1 hour', price: '£108.00', description: 'Deep cleanse, Steam, Dermaplaning, Suction, Exfoliation, Microdermabrasion, Radio frequency, Chemical peel, LED mask' },
    ],
  },
  {
    letter: 'F',
    name: 'Fat Dissolving',
    services: [
      { id: 'fd-1', name: 'Small area\'s - Lemon Bottle', duration: '15 minutes', price: '£60.00', description: 'Small areas - Chin' },
      { id: 'fd-2', name: 'Medium areas - Lemon Bottle', duration: '15 minutes', price: '£120.00', description: 'Medium area - Arms' },
      { id: 'fd-3', name: 'Larger Area\'s - Lemon Bottle', duration: '15 minutes', price: '£200.00', description: 'Large areas - Stomach or back' },
    ],
  },
  {
    letter: 'H',
    name: 'HIFU',
    services: [
      { id: 'hf-1', name: 'HIFU', duration: '', price: '', description: 'HIFU (High-Intensity Focused Ultrasound) is a non-invasive cosmetic treatment that uses focused ultrasound energy to stimulate collagen production deep within the skin, leading to tightening, lifting,...' },
      { id: 'hf-2', name: 'Full Face', duration: '45 minutes', price: '£200.00', description: '' },
      { id: 'hf-3', name: 'Face and Neck', duration: '2 hours', price: '£250.00', description: '' },
      { id: 'hf-4', name: 'Upper Face (forehead, crows feet, cheekbones, undereye)', duration: '1 hour', price: '£150.00', description: '' },
      { id: 'hf-5', name: 'Lower face (jowls, jaw, chin, cheeks, smile lines, upper lip)', duration: '1 hour', price: '£150.00', description: '' },
      { id: 'hf-6', name: 'Neck', duration: '1 hour', price: '£100.00', description: '' },
    ],
  },
  {
    letter: 'B',
    name: 'Bio Stimulator',
    services: [
      { id: 'bs-1', name: 'Bio Stimulator', duration: '20 minutes', price: '£220.00', description: 'Stimulates collagen production in the skin, improving elasticity, reducing wrinkles, and enhancing overall skin appearance.' },
    ],
  },
  {
    letter: 'B',
    name: 'Bulk Booking - Laser Hair Removal',
    services: [
      { id: 'blh-1', name: 'Bulk Booking - Laser Hair Removal', duration: '', price: '', description: 'A course of 6 laser hair removal treatment.' },
      { id: 'blh-2', name: 'Bikini Line', duration: '30 minutes', price: '£350.00', description: 'A course of 6 laser hair removal treatments.' },
      { id: 'blh-3', name: 'Half Leg', duration: '35 minutes', price: '£300.00', description: 'A course of 6 laser hair removal treatments.' },
      { id: 'blh-4', name: 'Under Arms', duration: '30 minutes', price: '£275.00', description: 'A course of 6 laser hair removal treatments.' },
      { id: 'blh-5', name: 'Chest - including nipples', duration: '30 minutes', price: '£325.00', description: 'A course of 6 laser hair removal treatments.' },
      { id: 'blh-6', name: 'Shoulders and Upper Body', duration: '30 minutes', price: '£200.00', description: 'PLEASE MAKE SURE ALL AREAS ARE SHAVED BEFORE YOUR APPOINTMENT!' },
      { id: 'blh-7', name: 'Brazilian', duration: '30 minutes', price: '£400.00', description: 'PLEASE MAKE SURE ALL AREAS ARE SHAVED BEFORE YOUR APPOINTMENT!' },
      { id: 'blh-8', name: 'Hollywood', duration: '35 minutes', price: '£450.00', description: 'PLEASE MAKE SURE ALL AREAS ARE SHAVED BEFORE YOUR APPOINTMENT!' },
      { id: 'blh-9', name: 'Full Leg - feet included', duration: '45 minutes', price: '£450.00', description: 'PLEASE MAKE SURE ALL AREAS ARE SHAVED BEFORE YOUR APPOINTMENT!' },
      { id: 'blh-10', name: 'Half Arms', duration: '30 minutes', price: '£300.00', description: 'A course of 6 laser hair removal treatments.' },
      { id: 'blh-11', name: 'Laser hair removal - All Year!', duration: '1 hour 20 minutes', price: '£477.00', description: 'One of payment of £477 - ends 11th February 2026.' },
      { id: 'blh-12', name: 'Full Body', duration: '1 hour 30 minutes', price: '£1,300.00', description: '' },
      { id: 'blh-13', name: 'Stomach', duration: '30 minutes', price: '£300.00', description: 'A course of 6 laser hair removal treatments.' },
      { id: 'blh-14', name: 'Full Back and Shoulders', duration: '30 minutes', price: '£300.00', description: 'PLEASE MAKE SURE ALL AREAS ARE SHAVED BEFORE YOUR APPOINTMENT!' },
      { id: 'blh-15', name: 'Chin and Upper Lip', duration: '20 minutes', price: '£250.00', description: 'A course of 6 laser hair removal treatments.' },
      { id: 'blh-16', name: 'Chin or Upper Lip', duration: '20 minutes', price: '£150.00', description: 'A course of 6 laser hair removal treatments.' },
      { id: 'blh-17', name: 'Full Arms - hands included', duration: '30 minutes', price: '£400.00', description: 'A course of 6 laser hair removal treatments.' },
    ],
  },
  {
    letter: 'C',
    name: 'CO2 Laser',
    services: [
      { id: 'co2-1', name: 'CO2 Laser', duration: '', price: '', description: 'CO₂ Laser is a skin resurfacing treatment that uses a laser to remove outer layers of damaged skin and stimulate collagen production.' },
      { id: 'co2-2', name: 'CO2 Laser - Full Face', duration: '30 minutes', price: '£150.00', description: 'Prices start from £150.00' },
      { id: 'co2-3', name: 'CO2 Laser - Small area', duration: '30 minutes', price: '£70.00', description: 'A small area of CO2 laser will be the eyes or a small area of the face' },
      { id: 'co2-4', name: 'CO2 - Body', duration: '30 minutes', price: '£200.00', description: 'This price is for one area only for the body - prices start from £200 for CO2 laser' },
    ],
  },
  {
    letter: 'C',
    name: 'CONSULTATION',
    services: [
      { id: 'cc-1', name: 'Consultation', duration: '15 minutes', price: '£30.00', description: 'Book in for a consultation and speak to our specialist - your £30 booking fee will come off your treatment!', bookable: true },
    ],
  },
  {
    letter: 'P',
    name: 'Patch test - laser',
    services: [
      { id: 'pt-1', name: 'Patch test - laser', duration: '', price: '', description: '', bookable: true },
    ],
  },
  {
    letter: 'P',
    name: 'PRP - Platelet Rich Plasma Therapy',
    services: [
      { id: 'prp-1', name: 'PRP - Platelet Rich Plasma Therapy', duration: '', price: '', description: 'PRP is a natural regenerative treatment that uses a small sample of your own blood to concentrate platelets and growth factors.' },
      { id: 'prp-2', name: 'PRP - Full Face & Eyes', duration: '45 minutes', price: '£199.00', description: '' },
      { id: 'prp-3', name: 'PRP - Eyes', duration: '40 minutes', price: '£99.00', description: '' },
      { id: 'prp-4', name: 'PRP - Full Neck', duration: '40 minutes', price: '£124.00', description: '' },
      { id: 'prp-5', name: 'PRP - Face & Neck', duration: '40 minutes', price: '£164.00', description: '' },
      { id: 'prp-6', name: 'PRP - Hair Restoration', duration: '45 minutes', price: '£149.00', description: '' },
      { id: 'prp-7', name: 'PRP - Face, Neck & Eyes', duration: '1 hour 15 minutes', price: '£249.00', description: '' },
    ],
  },
  {
    letter: 'P',
    name: 'Piercing Treatments',
    services: [
      { id: 'pg-1', name: 'Micro-Dermal Piercing X1', duration: '30 minutes', price: '£55.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-2', name: 'Micro-Dermal Piercing X2', duration: '30 minutes', price: '£85.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-3', name: 'Micro-Dermal Piercing X3', duration: '30 minutes', price: '£100.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-4', name: 'Micro - Dermal Diver Piercing X1', duration: '30 minutes', price: '£44.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-5', name: 'Micro - Dermal Diver Piercing X2', duration: '30 minutes', price: '£70.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-6', name: 'Micro - Dermal Diver Piercing X3', duration: '30 minutes', price: '£90.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-7', name: 'Ear Piercing with Ring', duration: '30 minutes', price: '£25.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-8', name: 'Ear Piercing with Ring - Pair', duration: '30 minutes', price: '£40.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-9', name: 'Ear Piercing with Bar', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-10', name: 'Ear Piercing with Bar - Pair', duration: '30 minutes', price: '£50.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-11', name: 'Ear Piercing with Jewelled Bar', duration: '30 minutes', price: '£35.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-12', name: 'Ear Piercing with Jewelled Bar - Pair', duration: '30 minutes', price: '£55.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-13', name: 'Tragus with Ring', duration: '30 minutes', price: '£25.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-14', name: 'Tragus with Jewelled Ring', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-15', name: 'Tragus with Bar', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-16', name: 'Tragus with Jewelled Bar', duration: '30 minutes', price: '£35.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-17', name: 'Helix with Ring', duration: '30 minutes', price: '£25.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-18', name: 'Helix Jewelled Ring', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-19', name: 'Helix with Bar', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-20', name: 'Helix with Jewelled Bar', duration: '30 minutes', price: '£35.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-21', name: 'Rook with Ring', duration: '30 minutes', price: '£25.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-22', name: 'Rook with Jewelled Bar', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-23', name: 'Rook with Bar', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-24', name: 'Daith with Ring', duration: '30 minutes', price: '£25.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-25', name: 'Daith with Jewelled Ring', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-26', name: 'Conch with Bar', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-27', name: 'Conch with Jewelled Bar', duration: '30 minutes', price: '£35.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-28', name: 'Anti-Tragus Bar', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-29', name: 'Anti-Tragus Jewelled Bar', duration: '30 minutes', price: '£45.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-30', name: 'Scaffold', duration: '30 minutes', price: '£45.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-31', name: 'Industrial', duration: '30 minutes', price: '£45.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-32', name: 'Navel Bar', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-33', name: 'Navel Jewelled Bar', duration: '30 minutes', price: '£40.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-34', name: 'Navel Double Jewelled Bar', duration: '30 minutes', price: '£45.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-35', name: 'Nipple with Ring', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-36', name: 'Nipple with Bar', duration: '30 minutes', price: '£35.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-37', name: 'Eyebrow with Ring', duration: '30 minutes', price: '£25.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-38', name: 'Eyebrow with Jewelled Ring', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-39', name: 'Eyebrow with Bar', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-40', name: 'Nose with Ring', duration: '30 minutes', price: '£25.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-41', name: 'Nose with Bar', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-42', name: 'Nose with Jewelled Bar', duration: '30 minutes', price: '£35.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-43', name: 'Lip with Ring', duration: '30 minutes', price: '£25.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-44', name: 'Lip with Jewelled Ring', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-45', name: 'Labret Bar', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-46', name: 'Labret Jewelled Bar', duration: '30 minutes', price: '£35.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-47', name: 'Madonna Bar', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-48', name: 'Madonna Jewelled Bar', duration: '30 minutes', price: '£35.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-49', name: 'Medusa Bar', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-50', name: 'Medusa Jewelled Bar', duration: '30 minutes', price: '£35.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-51', name: 'Snake Bite Bars', duration: '30 minutes', price: '£50.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-52', name: 'Snake Bite Jewelled Bars', duration: '30 minutes', price: '£60.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-53', name: 'Spider Bite Bars', duration: '30 minutes', price: '£50.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-54', name: 'Spider Bite Jewelled Bars', duration: '30 minutes', price: '£60.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-55', name: 'Angel Bite Bars', duration: '30 minutes', price: '£60.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-56', name: 'Angel Bite Jewelled Bars', duration: '30 minutes', price: '£65.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-57', name: 'Tongue', duration: '30 minutes', price: '£45.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-58', name: 'Surface Piercing', duration: '30 minutes', price: '£45.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-59', name: 'Web Piercing with Ring', duration: '30 minutes', price: '£25.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-60', name: 'Web Piercing with Jewelled Ring', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-61', name: 'Web Piercing with Bar', duration: '30 minutes', price: '£30.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
      { id: 'pg-62', name: 'Web Piercing with Jewelled Bar', duration: '30 minutes', price: '£35.00', description: 'All piercings are carried out with Titanium Jewellery.', bookable: false },
    ],
  },
  {
    letter: 'T',
    name: 'Tattoo Removal',
    services: [
      { id: 'tr-1', name: 'Tattoo Removal', duration: '', price: '', description: 'How many sessions you require will depend on the ink used, the age and quality of the tattoo. A patch test is required.' },
      { id: 'tr-2', name: 'Extra Small Tattoo - One Payment, FREE All year!', duration: '15 minutes', price: '£187.00', description: 'One off payment of £187 for FREE tattoo removal all year. Only valid for extra small tattoos.' },
      { id: 'tr-3', name: 'Small Tattoo Removal - One payment, FREE all year!', duration: '20 minutes', price: '£287.00', description: 'One off payment of £287 for FREE tattoo removal for a year. Only valid for small tattoos.' },
      { id: 'tr-4', name: 'Medium Tattoo Removal - One payment, FREE all year!', duration: '25 minutes', price: '£387.00', description: 'One off payment of £387 for FREE tattoo removal all year (usually £560). Only valid on medium tattoos.' },
      { id: 'tr-5', name: 'Large Tattoo Removal - One off payment, FREE all year!', duration: '45 minutes', price: '£487.00', description: 'One off payment of £487 for FREE tattoo removal all year (usually £720). Only valid for large tattoos.' },
      { id: 'tr-6', name: 'Extra Small Tattoo', duration: '20 minutes', price: '£30.00', description: '' },
      { id: 'tr-7', name: 'Small Tattoo - 7cmx7cm', duration: '30 minutes', price: '£50.00', description: '' },
      { id: 'tr-8', name: 'Medium Tattoo 10cmx10cm', duration: '30 minutes', price: '£70.00', description: '' },
      { id: 'tr-9', name: 'Large Tattoo 15cmx15cm', duration: '30 minutes', price: '£90.00', description: '' },
      { id: 'tr-10', name: 'Eyebrow Tattoo', duration: '30 minutes', price: '£50.00', description: '' },
    ],
  },
  {
    letter: 'T',
    name: 'Training Courses',
    services: [
      { id: 'tc-1', name: 'Training Courses', duration: '', price: '', description: 'Important Notice: For Students Only. Please do not book a training day without first speaking directly with LBL Aesthetics and Laser. Selecting a date does not guarantee your training day will be on the scheduled date.', bookable: true },
      { id: 'tc-2', name: 'Basic Dermal Filler', duration: '', price: '£599.00', description: 'Our Advanced Dermal Filler Training Course. Covers Jaw, Cheeks, Chin injection with cannula.' },
      { id: 'tc-3', name: 'Russian Masterclass', duration: '', price: '£499.00', description: 'We will contact you personally to arrange your practical date.' },
      { id: 'tc-4', name: 'Medic Led Pathway To Aesthetics', duration: '', price: '£1,499.00', description: '' },
      { id: 'tc-5', name: 'ENDO Fibre Lift Training', duration: '', price: '£999.00', description: '' },
      { id: 'tc-6', name: 'IV Refresher', duration: '', price: '£300.00', description: '' },
    ],
  },
  {
    letter: 'I',
    name: 'IV DRIP INFUSIONS',
    services: [
      { id: 'iv-1', name: 'IV DRIP INFUSIONS', duration: '', price: '', description: '' },
      { id: 'iv-2', name: 'Vitamin B12 + Vitamin C Complex IV Infusion', duration: '45 minutes', price: '£97.00', description: 'Our Vitamin C and B12 drip infusion is a wellness treatment designed to support overall vitality.' },
      { id: 'iv-3', name: 'The NAD+ Wellness IV Drip', duration: '45 minutes', price: '£207.00', description: 'Give your body a complete boost with our IV Vitamin Drip combined with NAD+.' },
    ],
  },
  {
    letter: 'M',
    name: 'Micro-Suction Ear Wax Removal',
    services: [
      { id: 'mu-1', name: 'One Ear', duration: '45 minutes', price: '£50.00', description: 'Not bookable online', bookable: false },
      { id: 'mu-2', name: 'Both Ears', duration: '45 minutes', price: '£70.00', description: 'Not bookable online', bookable: false },
    ],
  },
];

function formatPrice(price: string): number {
  return parseFloat(price.replace('£', '').replace(',', ''));
}

export default function BookContent() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState<'summary' | 'form'>('summary');
  const [toast, setToast] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServices((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const removeService = (id: string) => {
    setSelectedServices((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const selectedServiceData = categories.flatMap((cat) =>
    cat.services.filter((s) => selectedServices.has(s.id))
  );
  const totalPrice = selectedServiceData.reduce((sum, s) => sum + formatPrice(s.price || '£0'), 0);

  const handleContinue = () => {
    if (selectedServices.size === 0) return;
    setModalStep('summary');
    setShowModal(true);
  };

  const handleSubmit = () => {
    setShowModal(false);
    setToast(true);
    setTimeout(() => setToast(false), 3000);
    setSelectedServices(new Set());
    setModalStep('summary');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <main>
        <section className="pt-16 md:pt-24 pb-12">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#01A0E2]">Book Your Appointment</span>
              <h1 className="mt-4 font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1A1A]">Choose a Service</h1>
              <p className="mt-4 text-base leading-relaxed text-[#6B6B6B] max-w-xl mx-auto">Select the services you need and continue booking.</p>
            </div>
          </div>
        </section>

        <section className="pb-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="space-y-2 pb-24">
              {categories.map((cat) => (
                <div key={cat.name} className="border border-[#E8E4DE] rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => setExpandedCategory(expandedCategory === cat.name ? null : cat.name)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-[#01A0E2]">{cat.letter}</span>
                      <span className="font-heading font-semibold text-[#1A1A1A]">{cat.name}</span>
                      <span className="text-xs text-[#6B6B6B] bg-[#F0EDE8] px-2 py-0.5 rounded-full">{cat.services.length} services</span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-[#6B6B6B] transition-transform duration-300 ${expandedCategory === cat.name ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedCategory === cat.name && (
                    <div className="border-t border-[#E8E4DE] px-5 pb-4 space-y-2">
                      {cat.services.map((service) => {
                        const isChecked = selectedServices.has(service.id);
                        const isBookable = service.bookable !== false;
                        return (
                          <div
                            key={service.id}
                            className={`flex items-start gap-3 rounded-lg p-3 cursor-pointer transition-all duration-200 border ${
                              !isBookable ? 'opacity-60 cursor-not-allowed' : isChecked
                                ? 'border-[#01A0E2] bg-[#01A0E2]/5'
                                : 'border-[#E8E4DE] bg-[#FAF9F7] hover:border-[#01A0E2]/50 hover:bg-[#F0EDE8]'
                            }`}
                            onClick={() => { if (isBookable) toggleService(service.id); }}
                          >
                            <div className="mt-1 w-5 h-5 rounded border-2 cursor-pointer flex items-center justify-center" style={{ borderColor: isChecked ? '#01A0E2' : '#E8E4DE', backgroundColor: isChecked ? '#01A0E2' : 'transparent' }}>
                              {isChecked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-2">
                                <span className={`font-semibold text-sm ${isChecked ? 'text-[#01A0E2]' : 'text-[#1A1A1A]'}`}>
                                  {service.name}
                                </span>
                                {!isBookable && (
                                  <span className="text-xs font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded-full cursor-help" title="You can come to the clinic to book this service">Not bookable online</span>
                                )}
                              </div>
                              <div className="mt-1 flex items-center gap-2 flex-wrap">
                                {service.duration && <span className="text-xs font-medium text-[#01A0E2] bg-[#01A0E2]/10 px-2 py-0.5 rounded-full">{service.duration}</span>}
                                {service.price && <span className="text-xs font-bold text-[#1A1A1A]">{service.price}</span>}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={handleContinue}
              disabled={selectedServices.size === 0}
              className="fixed bottom-0 left-0 right-0 z-40 bg-[#01A0E2] text-white font-semibold py-4 px-6 text-center hover:bg-[#008bc7] transition-colors duration-200 shadow-[0_-4px_20px_rgba(1,160,226,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue Booking ({selectedServices.size} selected) — £{totalPrice.toFixed(2)}
            </button>
          </div>
        </section>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
              {modalStep === 'summary' && (
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-heading text-2xl font-bold text-[#1A1A1A]">Your Selection</h2>
                    <button onClick={() => setShowModal(false)} className="text-[#6B6B6B] hover:text-[#1A1A1A]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </div>

                  <div className="space-y-3 mb-6 max-h-[50vh] overflow-y-auto pr-2">
                    {selectedServiceData.map((service) => (
                      <div key={service.id} className="flex items-start justify-between p-3 bg-[#FAF9F7] rounded-lg border border-[#E8E4DE]">
                        <div className="flex-1">
                          <span className="font-semibold text-sm text-[#1A1A1A]">{service.name}</span>
                          {service.duration && <span className="ml-2 text-xs text-[#6B6B6B]">{service.duration}</span>}
                          {service.description && <p className="mt-1 text-xs leading-relaxed text-[#6B6B6B]">{service.description}</p>}
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                          {service.price && <span className="text-sm font-bold text-[#1A1A1A]">{service.price}</span>}
                          <button onClick={() => removeService(service.id)} className="text-[#6B6B6B] hover:text-red-500 transition-colors" aria-label="Remove">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[#E8E4DE] pt-4 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-heading font-bold text-[#1A1A1A]">Total</span>
                      <span className="text-2xl font-heading font-bold text-[#01A0E2]">£{totalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setModalStep('form')}
                    className="w-full mt-6 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#01A0E2] text-white font-semibold rounded-full hover:bg-[#008bc7] transition-colors duration-200 shadow-[0_8px_18px_rgba(1,160,226,0.18)] group cursor-pointer"
                  >
                    Next — Confirm Booking
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </button>

                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full mt-3 text-center text-sm font-semibold text-[#6B6B6B] hover:text-[#01A0E2] transition-colors"
                  >
                    ← Back to services
                  </button>
                </div>
              )}

              {modalStep === 'form' && (
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-heading text-2xl font-bold text-[#1A1A1A]">Booking Details</h2>
                    <button onClick={() => setModalStep('summary')} className="text-[#6B6B6B] hover:text-[#01A0E2]">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                  </div>

                  <div className="space-y-4 border-t border-[#E8E4DE] pt-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-1">Full Name</label>
                      <input type="text" placeholder="Your full name" className="w-full rounded-xl border border-[#E8E4DE] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#A0A0A0] focus:outline-none focus:border-[#01A0E2] focus:ring-1 focus:ring-[#01A0E2] transition-colors" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-1">Phone</label>
                        <input type="tel" placeholder="07904284115" className="w-full rounded-xl border border-[#E8E4DE] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#A0A0A0] focus:outline-none focus:border-[#01A0E2] focus:ring-1 focus:ring-[#01A0E2] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-1">Email</label>
                        <input type="email" placeholder="your@email.com" className="w-full rounded-xl border border-[#E8E4DE] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#A0A0A0] focus:outline-none focus:border-[#01A0E2] focus:ring-1 focus:ring-[#01A0E2] transition-colors" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-1">Preferred Date</label>
                        <input type="date" className="w-full rounded-xl border border-[#E8E4DE] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#01A0E2] focus:ring-1 focus:ring-[#01A0E2] transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1A1A1A] mb-1">Preferred Time</label>
                        <select className="w-full rounded-xl border border-[#E8E4DE] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#01A0E2] focus:ring-1 focus:ring-[#01A0E2] transition-colors bg-white">
                          <option value="">Select a time</option>
                          {['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00'].map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1A1A] mb-1">Message (optional)</label>
                      <textarea rows={3} placeholder="Any additional details..." className="w-full rounded-xl border border-[#E8E4DE] px-4 py-3 text-sm text-[#1A1A1A] placeholder-[#A0A0A0] focus:outline-none focus:border-[#01A0E2] focus:ring-1 focus:ring-[#01A0E2] transition-colors resize-none" />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full mt-6 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#01A0E2] text-white font-semibold rounded-full hover:bg-[#008bc7] transition-colors duration-200 shadow-[0_8px_18px_rgba(1,160,226,0.18)] group cursor-pointer"
                  >
                    Submit Reservation
                    <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </button>

                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full mt-3 text-center text-sm font-semibold text-[#6B6B6B] hover:text-[#01A0E2] transition-colors"
                  >
                    ← Back to services
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {toast && (
          <div className="fixed top-6 right-6 z-[60] bg-[#01A0E2] text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="font-semibold">Your reservation has been booked! We will be in touch shortly.</span>
          </div>
        )}
      </main>
    </div>
  );
}
