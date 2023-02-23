<template>
  <header>
    <nav class='navbar navbar-expand-lg navbar-dark d-none d-lg-block' style='z-index: 2000;'>
      <div class='container-fluid'>
        <router-link class='navbar-brand nav-link' to='/'>Gossip Project</router-link>
        <button class='navbar-toggler' type='button' data-mdb-toggle='collapse' data-mdb-target='#navbarExample01'
          aria-controls='navbarExample01' aria-expanded='false' aria-label='Toggle navigation'>
          <i class='fas fa-bars'></i>
        </button>
        <div class='collapse navbar-collapse' id='navbarExample01'>
          <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
            <li class='nav-item'>
              <router-link class='nav-link' to='/team'>Team</router-link>
            </li>
            <li class='nav-item'>
              <router-link class='nav-link' to='/contact'>Contact</router-link>
            </li>
          </ul>
          <ul class='navbar-nav d-flex flex-row'>
            <li class='nav-item me-3 me-lg-0'>
              <router-link class='nav-link' to='/login'>Login</router-link>
            </li>
            <li class='nav-item me-3 me-lg-0'>
              <router-link class='nav-link' to='/signup'>Sign Up</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id='intro' class='bg-image vh-100 shadow-1-strong'>
      <video class='home-video' playsinline autoplay muted loop>
        <source class='h-100'
          src='https://mdbootstrap.com/img/video/animation-intro-min.mp4'
          type='video/mp4'
        />
      </video>
      <div class='mask'>
        <div class='container d-flex align-items-center justify-content-center text-center h-100'>
          <div class='text-white'>
            <h1 class='mb-3'>The Gossip Project</h1>
            <h5 class='mb-4'>CRUD App to learn Vue.js and Node.js</h5>
            <a class='btn btn-outline-light btn-lg m-2' href='https://vuejs.org/' role='button'
              rel='nofollow' target='_blank'>VueJs</a>
            <a class='btn btn-outline-light btn-lg m-2' href='https://nodejs.org/en/' target='_blank'
              role='button'>NodeJs</a>
          </div>
        </div>
      </div>
    </div>
  </header>
  <router-view />
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style>
  @media (min-width: 992px) {
    #intro {
      margin-top: -58.59px;
      height: 50vh !important;
    }
  }

  .navbar .nav-link {
    color: #fff !important;
  }

  .home-video {
    min-width: 100%;
    min-height: 100%;
  }

  .mask {
    background: linear-gradient(
      45deg,
      rgba(29, 236, 197, 0.7),
      rgba(91, 14, 214, 0.7) 100%
    );
  }
</style>