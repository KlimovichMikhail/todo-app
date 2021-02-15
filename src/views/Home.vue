<template>
  <div>
    <Title />
    <div :class="$style.firstList">
      <Input />
      <Tasks />
      <Footer />
    </div>
    <div :class="$style.secondList"></div>
    <div :class="$style.thirdList"></div>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import Input from '@/components/Input.vue'
import Tasks from '@/components/Tasks.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Title,
    Input,
    Tasks,
    Footer
  },
  mounted() {
    this.$store.commit('getFromStorage')
  }
}
</script>

<style lang="scss" module>
body {
  padding: 3rem 0.5rem;
  font-family: 'Helvetica Neue';
  font-weight: 200;
  font-size: 16px;
  background-color: $main-color;
  color: $box-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .firstList {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: auto;
    width: 30vw;
    line-height: 1.8;
    background-color: $list-color;
    box-shadow: 0 3px 10px $box-color;
    overflow-y: auto;
  }

  .secondList {
    width: 99%;
    height: 0.3rem;
    z-index: -1;
    margin: 0 auto;
    background-color: $list-color;
    box-shadow: 0 3px 10px $box-color;
  }
  .thirdList {
    width: 98%;
    height: 0.3rem;
    z-index: -2;
    margin: 0 auto;
    background-color: $list-color;
    box-shadow: 0 3px 10px $box-color;
  }
}
</style>
