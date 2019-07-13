<template>
  <div class="page">
    <h1>Skills</h1>
    <div class="skills-container">
      <menu>
        <menuitem
          :class="{'menuitem-active': skills === 1, 'menuitem-inactive': skills === 2 || skills === 3}"
        >
          <p>What I use everyday</p>
          <button
            class="menuitem-button"
            aria-label="What I use everyday"
            @click="skills === 1 ? skills = 0 : skills = 1"
          />
        </menuitem>
        <menuitem
          :class="{'menuitem-active': skills === 2, 'menuitem-inactive': skills === 1 || skills === 3}"
        >
          <p>What I have experience with</p>
          <button
            class="menuitem-button"
            aria-label="What I have experience with"
            @click="skills === 2 ? skills = 0 : skills = 2"
          />
        </menuitem>
        <menuitem
          :class="{'menuitem-active': skills === 3, 'menuitem-inactive': skills === 1 || skills === 2}"
        >
          <p>What I'm learning</p>
          <button
            class="menuitem-button"
            aria-label="What I'm learning"
            @click="skills === 3 ? skills = 0 : skills = 3"
          />
        </menuitem>
      </menu>
      <article>
        <div :class="{ 'skills-active': skills === 1 || skills === 2 || skills === 3 }">
          <div v-if="skills === 1" class="skills-text">
            <p v-for="(skill, i) in skillsObj.one" :key="i">
              {{ skill }}
            </p>
          </div>
          <div v-if="skills === 2" class="skills-text">
            <p v-for="(skill, i) in skillsObj.two" :key="i">
              {{ skill }}
            </p>
          </div>
          <div v-if="skills === 3" class="skills-text">
            <p v-for="(skill, i) in skillsObj.three" :key="i">
              {{ skill }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import skillsObj from '../skills.json'

export default {
  name: 'Skills',
  data() {
    return {
      skills: 0,
      skillsObj: skillsObj
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
}
.skills-container {
  width: 600px;
  margin: 40px auto;
  display: block;
}
article {
  margin: 10px;
  & > div {
    display: inline-flex;
    width: 100%;
    position: relative;
    overflow: hidden;
    height: 100%;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 300%;
      height: 100%;
      background-image: linear-gradient(
        90deg,
        #ffffff 33.33%,
        transparent 66.66%
      );
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
menu {
  padding: 0;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
menuitem {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.35s ease-in-out;
}
.menuitem {
  &-button {
    position: relative;
    font-size: 1.5rem;
    height: 100px;
    width: 100px;
    background: white;
    background: linear-gradient(
      135deg,
      rgba(255, 0, 0, 1) 50%,
      rgba(255, 255, 255, 1) 50%
    );
    background-position: 100% 100%;
    background-size: 400%;
    border-radius: 100%;
    transition: all 0.5s ease;
    &::before,
    &::after {
      position: absolute;
      font-size: 2em;
      top: 12px;
      color: #000;
      transition: all 0.5s ease-in-out;
    }
    &::before {
      content: "<";
      left: 25%;
    }
    &::after {
      content: ">";
      right: 25%;
    }
    &:hover {
      transform: scale(1.05);
      background-position: 40% 40%;
      &::before,
      &::after {
        font-size: 2.2em;
        top: 8px;
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
  &-active {
    .menuitem-button {
      transform: scale(1.05);
      background-position: 40% 40%;
      &::before,
      &::after {
        font-size: 2.2em;
        top: 8px;
      }
      &::before {
        left: 10%;
      }
      &::after {
        right: 10%;
      }
    }
  }
  &-inactive {
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
