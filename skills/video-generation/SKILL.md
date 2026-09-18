# InvoiceFine AI Video Prompt Generation Skill

## Purpose
Generate scene-by-scene prompts for AI video tools (Runway Gen-3, Kling AI, Luma Dream Machine) and short-form video editors, ensuring smooth transitions, authentic motion, and real UI overlay integration.

## When to Use
- Producing video commercial concepts, product trailers, and short-form video ads.
- Creating B-roll scenes of Indian retail environments and merchant workflows.
- Directing video editors on pacing, camera motions, and voiceover timing.

## Inputs
- Video objective (Awareness, Feature Spotlight, Problem/Solution).
- Duration (6s, 10s, 15s, 30s, 60s).
- Aspect ratio (9:16 vertical or 16:9 widescreen).
- Target feature & retail setting.

## Workflow
1. Define total duration and scene count (e.g. 15s = 3 scenes of 5s each).
2. For each scene, specify:
   - **Timing**: Second markers (e.g. 0:00–0:04).
   - **Visual & Environment**: Merchant action, customer counter interaction.
   - **Camera Motion**: Slow push-in, tracking pan, steady close-up.
   - **On-Screen Text**: Concise 3–5 word graphic captions.
   - **Voice-over**: Synchronized audio script.
3. Detail phone screen placement: Instruct camera to capture hands holding smartphone with blank screen ready for screen recording overlay.
4. Conclude with strong brand CTA and official logo animation.

## Rules
- **REAL SCREEN RECORDING OVERLAY**: AI video models must NOT render software interfaces. Video editors must composite verified screen recordings from `assets/screenshots/` or real device screen captures onto the phone.
- Keep camera movements smooth and grounded (avoid chaotic hyperspeed zooms or psychedelic morphing).
- Match voiceover pacing to reading speed (approx. 2.5 to 3 words per second).

## Output Format
- **OBJECTIVE**: Core marketing goal.
- **DURATION & RATIO**: e.g., 15 seconds, 9:16 vertical.
- **SCENE BREAKDOWN**: Scene number, timestamps, visual direction, camera motion, on-screen text, voiceover script.
- **ENDING CTA**: Final title card and action button.
- **NEGATIVE PROMPT**: Avoid jittery hands, morphing faces, distorted geometry, or AI UI hallucinations.

## Examples
```text
OBJECTIVE: Demonstrate fast thermal receipt printing at a busy grocery counter.
DURATION: 15 seconds | ASPECT RATIO: 9:16 vertical

SCENE 1 (0:00 - 0:05)
Visual: Close-up of Indian shopkeeper's hands tapping an Android phone on a clean wooden counter during peak evening hours.
Camera: Slow macro push-in focusing on hand movement.
On-Screen Text: "3 Taps = Printed Bill"
Voice-over (Hinglish): "Dukaan ki lambi line ab hogi 2 minute mein clear!"

SCENE 2 (0:05 - 0:10)
Visual: Mini Bluetooth thermal printer beside phone buzzing to life, a crisp receipt cleanly sliding out.
Camera: Smooth side tilt tracking the receipt rolling out.
On-Screen Text: "Auto-Bluetooth Thermal Print"
Voice-over: "Thermal receipt nikaalo bina kisi wire ke jhanjhat ke."

SCENE 3 (0:10 - 0:15)
Visual: Customer smiles and receives receipt; merchant smiles at counter. Final brand card with InvoiceFine logo.
Camera: Eye-level steady shot pulling back.
On-Screen Text: "Download InvoiceFine Free • 100% Offline"
Voice-over: "Aaj hi download karein InvoiceFine free!"
Ending CTA: Link in Bio / Install Now

NEGATIVE PROMPT: blurry frames, flickering lights, disfigured fingers, morphing objects, fake floating digital screens, cartoon rendering
```

## Quality Checklist
- [ ] Timeline sums exactly to declared duration.
- [ ] Explicit instruction for screen capture overlay included.
- [ ] Camera directions are feasible for AI video generators.
- [ ] Voiceover word count matches scene duration.
