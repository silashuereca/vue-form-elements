<template>
  <div class="v-container">
    <div class="star star2"></div>
    <div class="star star3"></div>
    <div class="star star4"></div>
    <div class="star star5"></div>
    <div class="star star6"></div>
    <div class="star star7"></div>
    <div class="star star8"></div>
    <div class="star star9"></div>
    <div class="star star10"></div>
    <div class="star star11"></div>
    <div class="star star12"></div>
    <div class="star star13"></div>
    <div class="star star14"></div>
    <div class="star star15"></div>
    <div class="star star16"></div>
    <div class="star star17"></div>
    <div class="star star18"></div>
    <div class="star star19"></div>
    <div class="star star20"></div>
  </div>
</template>

<style scoped>

.v-container {
  position: relative;
  margin-right: 100px;
  width: 40%;
  height: 400px;
}

.star {
  position: absolute;
  width: 5px;
  height: 5px;
  background: linear-gradient(45deg, #55efc4, #2ECC71);
  border-radius: 5px;
  filter: drop-shadow(0 15px 10px #2ECC71);
  animation: tail ease-in-out;
  animation-duration: 2s;
}

.star1 {
  left: 0;
  animation-name: star1;
}

.star2 {
  left: 5%;
  bottom: 90%;
  animation-name: star2;
}

.star3 {
  left: 10%;
  bottom: 80%;
  animation-name: star3;
}

.star4 {
  left: 15%;
  bottom: 70%;
  animation-name: star4;
}

.star5 {
  left: 20%;
  bottom: 60%;
  animation-name: star5;
}

.star6 {
  left: 25%;
  bottom: 50%;
  animation-name: star6;
}

.star7 {
  left: 30%;
  bottom: 40%;
  animation-name: star7;
}

.star8 {
  left: 35%;
  bottom: 30%;
  animation-name: star8;
}

.star9 {
  left: 40%;
  bottom: 20%;
  animation-name: star9;
}

.star10 {
  left: 45%;
  bottom: 10%;
  animation-name: star10;
}

.star11 {
  left: 50%;
  bottom: 0%;
  animation-name: star11;
}

.star12 {
  left: 55%;
  bottom: 10%;
  animation-name: star12;
}

.star13 {
  left: 60%;
  bottom: 20%;
  animation-name: star13;
}

.star14 {
  left: 65%;
  bottom: 30%;
  animation-name: star14;
}

.star15 {
  left: 70%;
  bottom: 40%;
  animation-name: star15;
}

.star16 {
  left: 75%;
  bottom: 50%;
  animation-name: star16;
}

.star17 {
  left: 80%;
  bottom: 60%;
  animation-name: star17;
}

.star18 {
  left: 85%;
  bottom: 70%;
  animation-name: star18;
}

.star19 {
  left: 90%;
  bottom: 80%;
  animation-name: star19;
}

.star20 {
  left: 95%;
  bottom: 90%;
  animation-name: star20;
}

@keyframes star2 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 90%;
    opacity: 1;
  }
}

@keyframes star3 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 80%;
    opacity: 1;
  }
}

@keyframes star4 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 70%;
    opacity: 1;
  }
}

@keyframes star5 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 60%;
    opacity: 1;
  }
}

@keyframes star6 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 50%;
    opacity: 1;
  }
}

@keyframes star7 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 40%;
    opacity: 1;
  }
}

@keyframes star8 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 30%;
    opacity: 1;
  }
}

@keyframes star9 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 20%;
    opacity: 1;
  }
}

@keyframes star10 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 10%;
    opacity: 1;
  }
}

@keyframes star11 {
  from {
    opacity: 0.0;
  }

  to {
    opacity: 1;
  }
}

@keyframes star12 {
  from {
    bottom: 0%;
    opacity: 0.0;

  }

  to {
    bottom: 10%;
    opacity: 1;
  }
}

@keyframes star13 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 20%;
    opacity: 1;
  }
}

@keyframes star14 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 30%;
    opacity: 1;
  }
}

@keyframes star15 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 40%;
    opacity: 1;
  }
}

@keyframes star16 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 50%;
    opacity: 1;
  }
}

@keyframes star17 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 60%;
    opacity: 1;
  }
}

@keyframes star18 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 70%;
    opacity: 1;
  }
}

@keyframes star19 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 80%;
    opacity: 1;
  }
}

@keyframes star20 {
  from {
    bottom: 0%;
    opacity: 0.0;
  }

  to {
    bottom: 90%;
    opacity: 1;
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
