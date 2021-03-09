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
        <div class="contact-icon-wrapper">
          <span class="icon-phone contact-icon contact-icon-phone"></span>
        </div>
        <h3 class="t-h-3 m-xl-t m-l-b">Telephone</h3>
        <Button black link="tel:+48123456789">Contact me</Button>
      </div>
      <div class="contact-card p-l-all">
        <div class="contact-icon-wrapper">
          <span class="icon-mail contact-icon contact-icon-mail"></span>
        </div>
        <h3 class="t-h-3 m-xl-t m-l-b">E-mail</h3>
        <Button black link="mailto:test@test.pl">Write to me</Button>
      </div>
      <div class="contact-card p-l-all">
        <div class="contact-icon-wrapper">
          <span class="icon-blog contact-icon contact-icon-blog"></span>
        </div>
        <h3 class="t-h-3 m-xl-t m-l-b">Blog</h3>
        <Button black link="https://google.com">Read my content</Button>
      </div>
      <div class="contact-card p-l-all">
        <div class="contact-icon-wrapper">
          <span class="icon-linkedin contact-icon contact-icon-linkedin"></span>
        </div>
        <h3 class="t-h-3 m-xl-t m-l-b">LinkedIn</h3>
        <Button black link="https://linkedin.com">Follow me</Button>
      </div>
    </div>
  </div>
</template>
<script>
import Heading from './Heading.vue';
import Button from './Button.vue';
import Phone from './Icons/Phone.vue';
import Mail from './Icons/Mail.vue';
import LinkedIn from './Icons/LinkedIn.vue';
import Website from './Icons/Website.vue';

export default {
  components: {
    Heading,
    Button,
    Phone,
    Mail,
    LinkedIn,
    Website,
  },
};
</script>
<style lang="scss" scoped>
  @use '../style/common';
  @use '../style/colors';
  @use '../style/spacing';
  @use '../style/typography';

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

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
      background-color: colors.$c-gold;
      transition: background-color 250ms ease-in-out;
      max-height: 150px;
      cursor: pointer;
      position: relative;

      &:hover {
        cursor: pointer;
        // background-color: unset;
        background-image: linear-gradient(-45deg, colors.$c-gold-pale, colors.$c-gold-dark, colors.$c-gold-light, colors.$c-gold);
        background-size: 400% 400%;
        animation: gradient 3s ease-in-out infinite;

        .contact-icon-wrapper {
          transform: rotate(10deg);
        }

      }
    }

    &-icon {
      font-size: 50px;
      fill: colors.$c-black;
      &-wrapper {
        position: absolute;
        top: -40px;
        background-color: colors.$c-white;
        padding: 15px;
        border-radius: 100%;
        transform: rotate(0deg);
        transition: transform 250ms ease-in-out;
      }
    }
  }

</style>
