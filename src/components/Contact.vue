<template>
  <div
    id="contact"
    class="contact p-xl-tb"
  >
    <Heading
      title="Contact"
      paragraph="Excepteur sint occaecat cupidatat non proident,
       sunt in culpa qui officia deserunt mollit anim id est laborum.
        Sed ut perspiciatis unde omnis iste natus"
    />
    <div
      class="contact-container container"
      data-aos="fade-right"
      data-aos-delay="400"
      data-aos-duration="1000"
    >
      <div class="contact-card p-l-all" >
        <h3 class="t-h-3 m-l-b">Telephone</h3>
        <Phone class="contact-icon m-l-b" />
        <a class="link" href="tel:+48123456789">+48 123 456 789</a>
      </div>
      <div class="contact-card p-l-all">
        <h3 class="t-h-3 m-l-b">E-mail</h3>
        <Mail class="contact-icon m-l-b" />
        <a class="link" href="mailto:test@test.pl">test@test.pl</a>
      </div>
      <div class="contact-card p-l-all">
        <h3 class="t-h-3 m-l-b">Blog</h3>
        <Website class="contact-icon m-l-b" />
        <a class="link" target="blank" href="https://google.com">google.com</a>
      </div>
      <div class="contact-card p-l-all">
        <h3 class="t-h-3 m-l-b">LinkedIn</h3>
        <LinkedIn class="contact-icon m-l-b" />
        <a class="link" target="blank" href="https://linkedin.com">google.com</a>
      </div>
    </div>
  </div>
</template>
<script>
import Heading from './Heading.vue';
import Phone from './Icons/Phone.vue';
import Mail from './Icons/Mail.vue';
import LinkedIn from './Icons/LinkedIn.vue';
import Website from './Icons/Website.vue';

export default {
  components: {
    Heading,
    Phone,
    Mail,
    LinkedIn,
    Website,
  },
};
</script>
<style lang="scss" scoped>
  @use '../style/colors';
  @use '../style/spacing';
  @use '../style/typography';

  .contact {
    width: 100%;
    min-height: 60vh;
    display: flex;
    flex-wrap: wrap;
    background-color: colors.$c-grey;

    &-container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
    }

    &-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 1px solid colors.$c-black;
      background-color: colors.$c-white;
      transition: background-color 250ms ease-in-out;
      border-radius: 3px;
      max-height: 160px;
      cursor: pointer;

      &:hover {
        background-color: colors.$c-black;

        .t-h-3, .link {
          color: colors.$c-white;
        }

        .contact-icon {
          fill: colors.$c-white;
        }
      }
    }

    &-icon {
      width: 50px;
      height: 50px;
      fill: colors.$c-black;
    }
  }

</style>
