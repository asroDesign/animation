<template>
  <div class="process">
    <div class="steps">
      <StepCircle />
      <StepCircle />
      <StepCircle />
      <StepCircle />
      <StepCircle reverse />
      <StepCircle reverse />

      <img class="vertical-line" alt="Line" :src="line16" />

      <StepCard
          number="01"
          title="Workshops"
          text="To understand the unique demands of your business, we run multiple workshops..."
      />

      <StepCard
          number="02"
          title="Planning"
          text="A lot goes into the planning stage, such as industry research, competitor research..."
          reverse
      />

      <StepCard
          number="03"
          title="A/B Testing"
          text="From experimenting with content to testing advertisements and marketing techniques..."
      />

      <StepCard
          number="04"
          title="Execution"
          text="Moving forth with execution, we analyze processes, create campaigns..."
          reverse
      />

      <StepCard
          number="05"
          title="Implementation"
          text="Now for the exciting part, we get our hands dirty with launching your project..."
      />
    </div>

    <div class="images">
      <img :src="researchPaperPana1" alt="Research Paper" />
      <img :src="animationAmico11" alt="Animation Amico" />
      <img :src="versionControlAmico1" alt="Version Control" />
      <img :src="animationPana11" alt="Animation Pana" />
      <img :src="videoFilesPana1" alt="Video Files" />
    </div>
  </div>
</template>

<script>
import animationAmico11 from "~/public/system/process/animation-amico.png";
import animationPana11 from "~/public/system/process/animation-pana.png";
import line16 from "~/public/system/process/line-16.svg";
import researchPaperPana1 from "~/public/system/process/research-paper-pana.png";
import versionControlAmico1 from "~/public/system/process/version-control-amico.png";
import videoFilesPana1 from "~/public/system/process/video-files-pana.png";

export default {
  name: "ProcessTimeline",
  components: {
    StepCircle: {
      props: ['reverse'],
      template: `
        <div class="step-circle" :class="{ reverse: reverse }">
          <div class="circle-inner" />
        </div>
      `
    },
    StepCard: {
      props: ['number', 'title', 'text', 'reverse'],
      template: `
        <div class="step-card" :class="{ reverse: reverse }">
          <div class="step-header">
            <span class="step-number">{{ number }}</span>
            <div class="step-bar"></div>
          </div>
          <div class="step-content">
            <h3>{{ title }}</h3>
            <p>{{ text }}</p>
          </div>
        </div>
      `
    }
  },
  data() {
    return {
      animationAmico11,
      animationPana11,
      line16,
      researchPaperPana1,
      versionControlAmico1,
      videoFilesPana1,
    };
  },
};
</script>

<style>
.process {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
}

.steps {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.step-circle {
  border: 2px dashed var(--variable-collection-light-shade);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-circle.reverse {
  transform: rotate(180deg);
}

.circle-inner {
  background-color: var(--variable-collection-primary);
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

.vertical-line {
  position: absolute;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: var(--variable-collection-light-shade);
}

.step-card {
  background: var(--variable-collection-dark-bg, #1e1e1e);
  color: white;
  padding: 1.5rem;
  border-radius: 1rem;
  margin: 2rem 0;
  width: 100%;
  max-width: 600px;
}

.step-card.reverse {
  align-self: flex-start;
  text-align: left;
}

.step-card:not(.reverse) {
  align-self: flex-end;
  text-align: right;
}

.step-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.step-number {
  background-color: var(--variable-collection-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-weight: bold;
}

.step-bar {
  height: 5px;
  background-color: var(--variable-collection-primary);
  flex: 1;
  margin-left: 0.5rem;
}

.step-content h3 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.step-content p {
  font-size: 1rem;
  opacity: 0.8;
}

.images {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
}

.images img {
  width: 200px;
  height: auto;
  border-radius: 10px;
}

/* ریسپانسیو */
@media (max-width: 768px) {
  .step-card {
    max-width: 90%;
    text-align: center;
    align-self: center !important;
  }

  .step-header {
    flex-direction: column;
  }

  .step-bar {
    width: 100%;
    height: 5px;
    margin-top: 0.5rem;
    margin-left: 0;
  }

  .images img {
    width: 45%;
  }
}

@media (max-width: 480px) {
  .images img {
    width: 100%;
  }
}
</style>
