<template>
  <div class="page">
    <h1>Skills</h1>
    <div class="skills-container">
      <article>
        <div :class="{ 'skills-active': skills === 1 || skills === 2 || skills === 3 }">
          <div v-if="skills === 1" class="skills-text">
            <h1>one</h1>
          </div>
          <div v-if="skills === 2" class="skills-text">
            <h1>two</h1>
          </div>
          <div v-if="skills === 3" class="skills-text">
            <h1>three</h1>
          </div>
        </div>
      </article>
      <aside>
        <button @click="skills === 1 ? skills = 0 : skills = 1">
          What I use everyday
        </button>
        <button @click="skills === 2 ? skills = 0 : skills = 2">
          What I have experience with
        </button>
        <button @click="skills === 3 ? skills = 0 : skills = 3">
          What I'm learning
        </button>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: 0
    }
  }
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
      margin: 10px;
      & > div {
        display: inline-flex;
        width: 100%; //
        position: relative; //
        overflow: hidden; //
        height: 100%;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 300%;
          height: 100%;
          background-image: linear-gradient(90deg, #ffffff 33.33%, transparent 66.66%);
          transform: translateX(-66.66%);
          z-index: 0;
          transition: all 0.75s cubic-bezier(0.4, 0, 0.2, 1);
        }
        &.skills-active {
          &::before {
            transform: translateX(0);
          }
        }
        .skills-text {
          z-index: 2;
        }
      }
    }
    aside {
      max-width: 300px;
      flex-grow: 1;
      height: 100%;
      margin: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      button {
        position: relative;
        font-size: 1.5rem;
        padding: 22px 8px 6px 8px;
        max-width: 275px;
        height: 275px;
        background: white;
        background: linear-gradient(135deg, rgba(0,0,255,1) 0%, rgba(255,255,255,1) 50%);
        background-position: 100% 100%;
        background-size: 400%;
        border-radius: 100%;
        transition: all 0.5s ease;
        &::before, &::after {
          position: absolute;
          font-size: 2.5em;
          top: 30px;
          transition: all 0.5s ease-in-out;
        }
        &::before {
          content: '<';
          left: 35%;
        }
        &::after {
          content: '>';
          right: 35%;
        }
        &:hover {
          transform: scale(1.05);
          background-position: 40% 40%;
          &::before, &::after {
            font-size: 3em;
            top: 20px;
          }
          &::before {
            left: 10%;
          }
          &::after {
            right: 10%;
          }
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
}
</style>
