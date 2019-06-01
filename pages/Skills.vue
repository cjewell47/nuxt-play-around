<template>
  <div class="page">
    <h1>Skills</h1>
    <div class="skills-container">
      <article />
      <aside>
        <div />
        <div />
        <div />
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills'
}
</script>

<style lang="scss" scoped>
h1 {
  color: blue;
  font-size: 2rem;
}
.page {
  display: flex;
  justify-content: center;
  max-width: 1100px;
  flex-direction: column;
  align-items: center;
  .skills-container {
    height: 900px;
    width: 100%;
    display: flex;
    article {
      flex-grow: 2;
      height: 100%;
      background: yellowgreen;
      margin: 10px;
    }
    aside {
      max-width: 300px;
      flex-grow: 1;
      height: 100%;
      margin: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div {
        max-width: 275px;
        height: 275px;
        background: white;
        background: linear-gradient(135deg, rgba(0,0,255,1) 0%, rgba(255,255,255,1) 50%);
        background-position: 100% 100%;
        background-size: 400%;
        transition: background-position .45s ease-in-out;
        &:hover {
          background-position: 40% 40%;
        }
      }
    }
  }
}
</style>
