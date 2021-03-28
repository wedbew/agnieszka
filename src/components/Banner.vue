<template>
  <kinesis-container>
    <kinesis-element :strength="4"  type="depth">
      <h2 class="t-h-2 p-l-b">Let's work together</h2>
    </kinesis-element>
    <kinesis-element :strength="8" type="depth">
      <h3 class="t-h-3 p-l-b">Nic nie będzie</h3>
    </kinesis-element>
    <kinesis-element :strength="16"  type="depth">
      <Button black>Hire Me</Button>
    </kinesis-element>
  </kinesis-container>
</template>

<script>
  import Button from './Button.vue';
  import { KinesisContainer, KinesisElement} from 'vue-kinesis';
  export default {
    components: {
      Button,
      KinesisContainer,
      KinesisElement
    }

  }
</script>

<style lang="scss" scoped>
  @use '../style/typography';
  @use '../style/spacing';
</style>
