<template>
  <div class="input">
    <div class="wrapper">
      <input
        type="text"
        class="text-input"
        placeholder="- What needs to be done?"
      />
    </div>
  </div>
</template>

<style scoped>
.input {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #a7a7a7;
}

.wrapper {
  display: flex;
  padding: 10px;
  width: 100%;
}

.text-input {
  font-family: "Raleway", sans-serif;
  font-style: italic;
  font-size: 18px;
  border: 0;
  outline: 0;
  flex: 1;
}
</style>
