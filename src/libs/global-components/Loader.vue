<template>
  <div class="container-wrapper">
    <div class="v-container">
      <div class="star star1"></div>
      <div class="star star2"></div>
      <div class="star star3"></div>
      <div class="star star4"></div>
      <div class="star star5"></div>
      <div class="star star6"></div>
      <div class="star star7"></div>
      <div class="star star8"></div>
      <div class="star star9"></div>
    </div>
  </div>
</template>

<style scoped>

.container-wrapper {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
}

.v-container {
  position: relative;
  left: 0;
  right: 0;
  width: 40%;
  height: 200px;
}

.star {
  position: absolute;
  width: 5px;
  height: 5px;
  background: linear-gradient(45deg, #55efc4, #2ECC71);
  border-radius: 5px;
  filter: drop-shadow(0 15px 10px #2ECC71);
  animation: tail ease-in-out;
  animation: 1s infinite;
}

.star1 {
  left: 30%;
  bottom: 100%;
  animation-name: star1;
}

.star2 {
  left: 35%;
  bottom: 75%;
  animation-name: star2;
}

.star3 {
  left: 40%;
  bottom: 50%;
  animation-name: star3;
}

.star4 {
  left: 45%;
  bottom: 25%;
  animation-name: star4;
}

.star5 {
  left: 50%;
  bottom: 0%;
  animation-name: star5;
}

.star6 {
  left: 55%;
  bottom: 25%;
  animation-name: star6;
}

.star7 {
  left: 60%;
  bottom: 50%;
  animation-name: star7;
}

.star8 {
  left: 65%;
  bottom: 75%;
  animation-name: star8;
}

.star9 {
  left: 70%;
  bottom: 100%;
  animation-name: star9;
}

@keyframes star1 {
  0% {
    opacity: 0.0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.0;
  }
}

@keyframes star2 {
  0% {
    opacity: 0.0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.0;
  }
}

@keyframes star3 {
  0% {
    opacity: 0.0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.0;
  }
}

@keyframes star4 {
  0% {
    opacity: 0.0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.0;
  }
}

@keyframes star5 {
   0% {
    opacity: 0.0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.0;
  }
}

@keyframes star6 {
   0% {
    opacity: 0.0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.0;
  }
}

@keyframes star7 {
   0% {
    opacity: 0.0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.0;
  }
}

@keyframes star8 {
   0% {
    opacity: 0.0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.0;
  }
}

@keyframes star9 {
   0% {
    opacity: 0.0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.0;
  }
}

@media only screen and (max-width: 800px) {
  .v-container {
    position: absolute;
    margin-right: 0;
    width: 100%;
  }

}
</style>
