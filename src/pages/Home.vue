<template>
  <!-- preloader
    ================================================== -->
  <div id="preloader" v-if="loading0">
    <div id="loader">
    </div>
  </div>

  <!-- page wrap
    ================================================== -->
  <div id="page" class="s-pagewrap" v-if="!loading0">


    <!-- # site header 
        ================================================== -->
    <header class="s-header">

      <div class="s-header__logo">
        <a class="logo" href="">
          <img :src="verifImgExist(Vitrine.logo)" alt="Homepage">
        </a>
      </div>

      <a class="s-header__menu-toggle opaque" id='menu' @click='openMenu' href="#0">
        <span class="s-header__menu-text">Menu</span>
        <span class="s-header__menu-icon"></span>
      </a>

      <nav class="s-header__nav" id='menuNav'>

        <a href="#0" class="s-header__nav-close-btn" title="close" @click='closeMenu'><span>Close</span></a>
        <h3>{{ Vitrine.title }}</h3>

        <ul class="s-header__n   av-list">
          <li><a href="#intro" class="smoothscroll">Intro</a></li>
          <li v-if="Vitrine.aboutUs.status"><a href="#about" class="smoothscroll">About</a></li>
          <li v-if="Vitrine.service.status"><a href="#services" class="smoothscroll">Services</a></li>
          <li v-if="Vitrine.galerie.status"><a href="#portfolio" class="smoothscroll">Galerie</a></li>
          <li><a href="#contact" v-if="Vitrine.contactUs.status" class="smoothscroll">Contact</a></li>
        </ul>

        <p>


          {{ Vitrine.description }} </p>

        <ul class="s-header__social">


          <li v-for='vc in Vitrine.ereputation.data ' :key="vc.url">
            <a :href="vc.lien" v-if='vc.lien != ""'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" v-if='vc.title == "Facebook"'
                viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:">
                <path
                  d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20 c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z">
                </path>
              </svg>
              <span class="u-screen-reader-text">Facebook</span>
              <svg v-if='vc.title == "Twitter"' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:">
                <path
                  d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z">
                </path>
              </svg>
              <span class="u-screen-reader-text">Twitter</span>





              <svg v-if='vc.title == "Instagram"' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:">
                <path
                  d="M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,2.554,2.069,4.624,4.623,4.624c2.552,0,4.623-2.07,4.623-4.624 C16.622,9.447,14.551,7.377,11.999,7.377L11.999,7.377z M11.999,15.004c-1.659,0-3.004-1.345-3.004-3.003 c0-1.659,1.345-3.003,3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,13.658,15.004,11.999,15.004L11.999,15.004z">
                </path>
                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                <path
                  d="M20.533,6.111c-0.469-1.209-1.424-2.165-2.633-2.632c-0.699-0.263-1.438-0.404-2.186-0.42 c-0.963-0.042-1.268-0.054-3.71-0.054s-2.755,0-3.71,0.054C7.548,3.074,6.809,3.215,6.11,3.479C4.9,3.946,3.945,4.902,3.477,6.111 c-0.263,0.7-0.404,1.438-0.419,2.186c-0.043,0.962-0.056,1.267-0.056,3.71c0,2.442,0,2.753,0.056,3.71 c0.015,0.748,0.156,1.486,0.419,2.187c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45 c0.963,0.042,1.268,0.055,3.71,0.055s2.755,0,3.71-0.055c0.747-0.015,1.486-0.157,2.186-0.419c1.209-0.469,2.164-1.424,2.633-2.633 c0.263-0.7,0.404-1.438,0.419-2.186c0.043-0.962,0.056-1.267,0.056-3.71s0-2.753-0.056-3.71C20.941,7.57,20.801,6.819,20.533,6.111z M19.315,15.643c-0.007,0.576-0.111,1.147-0.311,1.688c-0.305,0.787-0.926,1.409-1.712,1.711c-0.535,0.199-1.099,0.303-1.67,0.311 c-0.95,0.044-1.218,0.055-3.654,0.055c-2.438,0-2.687,0-3.655-0.055c-0.569-0.007-1.135-0.112-1.669-0.311 c-0.789-0.301-1.414-0.923-1.719-1.711c-0.196-0.534-0.302-1.099-0.311-1.669c-0.043-0.95-0.053-1.218-0.053-3.654 c0-2.437,0-2.686,0.053-3.655c0.007-0.576,0.111-1.146,0.311-1.687c0.305-0.789,0.93-1.41,1.719-1.712 c0.534-0.198,1.1-0.303,1.669-0.311c0.951-0.043,1.218-0.055,3.655-0.055c2.437,0,2.687,0,3.654,0.055 c0.571,0.007,1.135,0.112,1.67,0.311c0.786,0.303,1.407,0.925,1.712,1.712c0.196,0.534,0.302,1.099,0.311,1.669 c0.043,0.951,0.054,1.218,0.054,3.655c0,2.436,0,2.698-0.043,3.654H19.315z">
                </path>
              </svg>
              <span class="u-screen-reader-text">Instagram</span>



              <svg v-if='vc.title == "Snapchat"' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24">
                <path
                  d="M5.829 4.533c-.6 1.344-.363 3.752-.267 5.436-.648.359-1.48-.271-1.951-.271-.49 0-1.075.322-1.167.802-.066.346.089.85 1.201 1.289.43.17 1.453.37 1.69.928.333.784-1.71 4.403-4.918 4.931-.251.041-.43.265-.416.519.056.975 2.242 1.357 3.211 1.507.099.134.179.7.306 1.131.057.193.204.424.582.424.493 0 1.312-.38 2.738-.144 1.398.233 2.712 2.215 5.235 2.215 2.345 0 3.744-1.991 5.09-2.215.779-.129 1.448-.088 2.196.058.515.101.977.157 1.124-.349.129-.437.208-.992.305-1.123.96-.149 3.156-.53 3.211-1.505.014-.254-.165-.477-.416-.519-3.154-.52-5.259-4.128-4.918-4.931.236-.557 1.252-.755 1.69-.928.814-.321 1.222-.716 1.213-1.173-.011-.585-.715-.934-1.233-.934-.527 0-1.284.624-1.897.286.096-1.698.332-4.095-.267-5.438-1.135-2.543-3.66-3.829-6.184-3.829-2.508 0-5.014 1.268-6.158 3.833z"
                  fill="#020202" />
              </svg>
              <span class="u-screen-reader-text">Snapchat</span>


              <svg xmlns="http://www.w3.org/2000/svg" v-if='vc.title == "Telegram"'
                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve">

                <path style="fill-rule:evenodd;clip-rule:evenodd;"
                  d="M0,0v455h455V0H0z M384.814,100.68l-53.458,257.136   c-1.259,6.071-8.378,8.822-13.401,5.172l-72.975-52.981c-4.43-3.217-10.471-3.046-14.712,0.412l-40.46,32.981   c-4.695,3.84-11.771,1.7-13.569-4.083l-28.094-90.351l-72.583-27.089c-7.373-2.762-7.436-13.171-0.084-16.003L373.36,90.959   C379.675,88.517,386.19,94.049,384.814,100.68z" />
                <path style="fill-rule:evenodd;clip-rule:evenodd;"
                  d="M313.567,147.179l-141.854,87.367c-5.437,3.355-7.996,9.921-6.242,16.068   l15.337,53.891c1.091,3.818,6.631,3.428,7.162-0.517l3.986-29.553c0.753-5.564,3.406-10.693,7.522-14.522l117.069-108.822   C318.739,149.061,316.115,145.614,313.567,147.179z" />

              </svg>

              <span class="u-screen-reader-text">Telegram</span>
            </a>
          </li>
        </ul>

      </nav>

    </header> <!-- end s-header -->


    <!-- # site-content
        ================================================== -->
    <section id="content" class="s-content">


      <!-- intro
            ----------------------------------------------- -->
      <section id="intro" v-if="statusH" class="s-intro target-section">

        <div class="s-intro__bg rellax" data-rellax-speed="-5"
          :style="'background-image: url(' + Vitrine.header.image.url + ')'"></div>

        <div class="row s-intro__content">

          <div class="column lg-12 s-intro__content-inner">
            <h3 class="s-intro__pretitle">{{ Vitrine.header.title.text }}</h3>
            <h1 class="s-intro__title" style="font-size:90px; ">
              <br>
              {{ Vitrine.header.description.text }}
            </h1>

            <div class="s-intro__more" v-if="statusA">
              <a class="smoothscroll btn btn--stroke s-intro__more-btn" href="#about">
                Learn More
              </a>
            </div>
          </div> <!-- s-intro__content-inner -->

        </div> <!-- s-intro__content -->

        <ul class="s-intro__social">
          <li v-for='vc in Vitrine.ereputation.data ' :key="vc.url">
            <a :href="vc.lien" v-if='vc.lien != ""'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" v-if='vc.title == "Facebook"'
                viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:">
                <path
                  d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592 c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20 c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z">
                </path>
              </svg>
              <span class="u-screen-reader-text">Facebook</span>
              <svg v-if='vc.title == "Twitter"' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:">
                <path
                  d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z">
                </path>
              </svg>
              <span class="u-screen-reader-text">Twitter</span>





              <svg v-if='vc.title == "Instagram"' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:">
                <path
                  d="M11.999,7.377c-2.554,0-4.623,2.07-4.623,4.623c0,2.554,2.069,4.624,4.623,4.624c2.552,0,4.623-2.07,4.623-4.624 C16.622,9.447,14.551,7.377,11.999,7.377L11.999,7.377z M11.999,15.004c-1.659,0-3.004-1.345-3.004-3.003 c0-1.659,1.345-3.003,3.004-3.003s3.002,1.344,3.002,3.003C15.001,13.659,13.658,15.004,11.999,15.004L11.999,15.004z">
                </path>
                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                <path
                  d="M20.533,6.111c-0.469-1.209-1.424-2.165-2.633-2.632c-0.699-0.263-1.438-0.404-2.186-0.42 c-0.963-0.042-1.268-0.054-3.71-0.054s-2.755,0-3.71,0.054C7.548,3.074,6.809,3.215,6.11,3.479C4.9,3.946,3.945,4.902,3.477,6.111 c-0.263,0.7-0.404,1.438-0.419,2.186c-0.043,0.962-0.056,1.267-0.056,3.71c0,2.442,0,2.753,0.056,3.71 c0.015,0.748,0.156,1.486,0.419,2.187c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45 c0.963,0.042,1.268,0.055,3.71,0.055s2.755,0,3.71-0.055c0.747-0.015,1.486-0.157,2.186-0.419c1.209-0.469,2.164-1.424,2.633-2.633 c0.263-0.7,0.404-1.438,0.419-2.186c0.043-0.962,0.056-1.267,0.056-3.71s0-2.753-0.056-3.71C20.941,7.57,20.801,6.819,20.533,6.111z M19.315,15.643c-0.007,0.576-0.111,1.147-0.311,1.688c-0.305,0.787-0.926,1.409-1.712,1.711c-0.535,0.199-1.099,0.303-1.67,0.311 c-0.95,0.044-1.218,0.055-3.654,0.055c-2.438,0-2.687,0-3.655-0.055c-0.569-0.007-1.135-0.112-1.669-0.311 c-0.789-0.301-1.414-0.923-1.719-1.711c-0.196-0.534-0.302-1.099-0.311-1.669c-0.043-0.95-0.053-1.218-0.053-3.654 c0-2.437,0-2.686,0.053-3.655c0.007-0.576,0.111-1.146,0.311-1.687c0.305-0.789,0.93-1.41,1.719-1.712 c0.534-0.198,1.1-0.303,1.669-0.311c0.951-0.043,1.218-0.055,3.655-0.055c2.437,0,2.687,0,3.654,0.055 c0.571,0.007,1.135,0.112,1.67,0.311c0.786,0.303,1.407,0.925,1.712,1.712c0.196,0.534,0.302,1.099,0.311,1.669 c0.043,0.951,0.054,1.218,0.054,3.655c0,2.436,0,2.698-0.043,3.654H19.315z">
                </path>
              </svg>
              <span class="u-screen-reader-text">Instagram</span>



              <svg v-if='vc.title == "Snapchat"' xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24">
                <path
                  d="M5.829 4.533c-.6 1.344-.363 3.752-.267 5.436-.648.359-1.48-.271-1.951-.271-.49 0-1.075.322-1.167.802-.066.346.089.85 1.201 1.289.43.17 1.453.37 1.69.928.333.784-1.71 4.403-4.918 4.931-.251.041-.43.265-.416.519.056.975 2.242 1.357 3.211 1.507.099.134.179.7.306 1.131.057.193.204.424.582.424.493 0 1.312-.38 2.738-.144 1.398.233 2.712 2.215 5.235 2.215 2.345 0 3.744-1.991 5.09-2.215.779-.129 1.448-.088 2.196.058.515.101.977.157 1.124-.349.129-.437.208-.992.305-1.123.96-.149 3.156-.53 3.211-1.505.014-.254-.165-.477-.416-.519-3.154-.52-5.259-4.128-4.918-4.931.236-.557 1.252-.755 1.69-.928.814-.321 1.222-.716 1.213-1.173-.011-.585-.715-.934-1.233-.934-.527 0-1.284.624-1.897.286.096-1.698.332-4.095-.267-5.438-1.135-2.543-3.66-3.829-6.184-3.829-2.508 0-5.014 1.268-6.158 3.833z"
                  fill="#020202" />
              </svg>
              <span class="u-screen-reader-text">Snapchat</span>


              <svg xmlns="http://www.w3.org/2000/svg" v-if='vc.title == "Telegram"'
                xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px"
                viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve">

                <path style="fill-rule:evenodd;clip-rule:evenodd;"
                  d="M0,0v455h455V0H0z M384.814,100.68l-53.458,257.136   c-1.259,6.071-8.378,8.822-13.401,5.172l-72.975-52.981c-4.43-3.217-10.471-3.046-14.712,0.412l-40.46,32.981   c-4.695,3.84-11.771,1.7-13.569-4.083l-28.094-90.351l-72.583-27.089c-7.373-2.762-7.436-13.171-0.084-16.003L373.36,90.959   C379.675,88.517,386.19,94.049,384.814,100.68z" />
                <path style="fill-rule:evenodd;clip-rule:evenodd;"
                  d="M313.567,147.179l-141.854,87.367c-5.437,3.355-7.996,9.921-6.242,16.068   l15.337,53.891c1.091,3.818,6.631,3.428,7.162-0.517l3.986-29.553c0.753-5.564,3.406-10.693,7.522-14.522l117.069-108.822   C318.739,149.061,316.115,145.614,313.567,147.179z" />

              </svg>

              <span class="u-screen-reader-text">Telegram</span>
            </a>
          </li>
        </ul> <!-- s-intro__social -->

        <div class="s-intro__scroll">
          <a href="#about" class="smoothscroll">
            <span>Scroll Down</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
              style="fill: rgba(0, 0, 0, 1);transform: rotate(180deg);msFilter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);">
              <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z">
              </path>
            </svg>
          </a>
        </div> <!-- s-intro__scroll -->

      </section> <!-- end s-intro -->


      <!-- about
            ----------------------------------------------- -->
      <section id="about" class="s-about target-section" v-if="statusA">

        <div class="row s-about__content">
          <div class="column lg-12">
            <h2 class="text-pretitle">About Us</h2>
            <p class="s-about__desc">
              {{ Vitrine.aboutUs.description.text }}
            </p>
          </div> <!-- end column  -->
        </div> <!-- end s-about__content  -->

      </section> <!-- end about -->


      <!-- services
            ----------------------------------------------- -->
      <section id="services" class="s-services" v-if="statusS">

        <div class="s-services__bg" :style="'background-image: url(' + verifImgExist(Vitrine.service.image.url) + ')'">
        </div>

        <div class="row narrow section-header section-header--dark has-bottom-sep">
          <div class="column lg-12">

            <h3 class="text-pretitle">Services</h3>
            <h1 class="text-display-title"> {{ Vitrine.service.title.text }}
            </h1>

            <p class="lead"> {{ Vitrine.service.description.text }}</p>

          </div> <!-- end column -->
        </div> <!-- end section header -->

        <div class="s-services__content">

          <div class="row services-list block-lg-one-half block-tab-whole">

            <div class="column service-item" v-for='service in  Vitrine.service.data' :key='service'>

              <span class="service-icon-block">
                <img :src="service.url" alt="" srcset="" width="24" height="24" viewBox="0 0 24 24">
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M22 4c-1.5 0-2.662 1.685-1.598 3.194.535.759.406 1.216.045 1.749-.765 1.127-1.872 2.057-3.447 2.057-2.521 0-3.854-2.083-4.131-3.848-.096-.614-.15-1.074.436-1.644.402-.39.695-.904.695-1.508 0-1.104-.896-2-2-2s-2 .896-2 2c0 .604.293 1.118.695 1.508.586.57.531 1.03.436 1.644-.277 1.765-1.61 3.848-4.131 3.848-1.575 0-2.682-.93-3.447-2.058-.362-.532-.491-.989.045-1.748 1.064-1.509-.098-3.194-1.598-3.194-1.104 0-2 .896-2 2 0 .797.464 1.495 1.144 1.808.825.38.856 1.317.856 2.171v12.021h20v-12.021c0-.854.031-1.792.856-2.171.68-.313 1.144-1.011 1.144-1.808 0-1.104-.896-2-2-2zm-10 6.297c1.977 2.96 5.58 3.354 8 1.851v3.852h-16v-3.852c2.398 1.49 6.01 1.131 8-1.851zm-8 9.703v-2h16v2h-16z" />
                </svg> -->
              </span>

              <div class="service-content">
                <h3 class="h4">{{ service.title }}</h3>

                <p>
                  {{ service.description }}
                </p>
              </div>

            </div> <!-- end service-item -->

          </div> <!-- end services-list -->

        </div> <!-- end services-content -->

      </section> <!-- end services -->


      <!-- portfolio
            ----------------------------------------------- -->
      <section id="portfolio" class="s-portfolio" v-if="statusP">

        <div class="s-portfolio__header">

          <div class="row narrow section-header section-header--dark has-bottom-sep">
            <div class="column lg-12">

              <h3 class="text-pretitle">Showcase</h3>
              <h1 class="text-display-title"> {{ Vitrine.galerie.title.text }}
              </h1>

              <p class="lead">
                {{ Vitrine.galerie.description.text }} </p>

            </div> <!-- end column -->
          </div> <!-- end section header -->

        </div> <!-- end s-portfolio__header -->

        <div class="row s-portfolio__content">
          <div class="column lg-12">

            <div class="folio-list bricks">


              <div class="brick folio-item" v-for="img in Vitrine.galerie.data" :key="img.d">

                <div class="folio-item__thumb">
                  <a class="folio-item__thumb-link" :href="img.url" :Title="img.title" data-size="1050x700">
                    <img :src="img.url" :srcset="img.url" alt="" style="width: 700px;" data-size="1050x700">
                  </a>
                </div>
                <div class="folio-item__info">
                  <div class="folio-item__cat">{{ img.description }}</div>
                  <h4 class="folio-item__title">{{ img.title }}</h4>
                </div>
                <a href="https://www.behance.net/" title="Project Link" class="folio-item__project-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
                    <path
                      d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z">
                    </path>
                    <path d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z"></path>
                  </svg>
                </a>
                <div class="folio-item__caption">
                  <p>{{ parse(img.description) }}</p>
                </div>

              </div> <!-- end brick-->

            </div> <!-- end folio-list, bricks -->

          </div> <!-- end column  -->
        </div> <!-- end s-portfolio__content -->
      </section>
      <section v-if="statusT">
        <div class="row testimonials">
          <div class="column lg-12">

            <h2 class="text-pretitle">What They Say About Us</h2>

            <div class="swiper-container testimonial-slider">

              <div class="swiper-wrapper">


                <div class="testimonial-slider__slide swiper-slide" v-for="t in Vitrine.temoignage.data" :key="t">

                  <p>
                    {{ t.description }}
                  </p>
                  <div class="testimonial-slider__author">
                    <img :src="t.url" alt="Author image" class="testimonial-slider__avatar">
                    <cite class="testimonial-slider__cite">
                      <strong> {{ t.nom }}</strong>
                      <span>{{ t.poste }}</span>
                    </cite>
                  </div>
                </div> <!-- end testimonial-slider__slide -->

              </div> <!-- end swiper-wrapper -->

              <div class="swiper-pagination"></div>

            </div> <!-- end swiper-container -->

          </div> <!-- end column -->
        </div> <!-- end row testimonials -->



      </section> <!-- end portfolio -->


      <section v-if='Vitrine.confiance.status'>

        <div class="clients-block">
          <h2 class="text-pretitle text-center ">Nous Font Confiance</h2>

          <div class="row">

            <swiper :slides-per-view="4" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange">
              <swiper-slide v-for="t in Vitrine.confiance.data" :key="t"><a href="#0" :title="t.nom"
                  class="swiper-slide clients__slide imgD "><img class="card-img-top imgD img-fluid" :src="t.url" /></a>
              </swiper-slide>





            </swiper>
          </div> <!-- end clients-outer -->
        </div> <!-- end clients-block -->



      </section> <!-- end portfolio -->

      <!-- contact
            ----------------------------------------------- -->
      <section id="contact" class="s-contact target-section" v-if="statusC">

        <div class="row section-header section-header--dark">
          <div class="column lg-12">

            <h3 class="text-pretitle">Get In Touch</h3>
            <h1 class="text-display-title">
              {{ Vitrine.contactUs.description.text }}

              <a href="mailto:#0"> {{ Vitrine.contactUs.email.text }}</a>
            </h1>

          </div> <!-- end column -->
        </div> <!-- end section header -->

        <div class="row s-contact__infos">

          <div class="column lg-5 md-6 stack-on-900 s-contact__block-address">
            <h5 class="with-top-line">Where to Find Us</h5>

            <p>
              {{ Vitrine.contactUs.findUs.text }}
            </p>
          </div>

          <div class="column lg-3 md-6 stack-on-900 s-contact__block-social">
            <h5 class="with-top-line">Follow Us</h5>
            <ul class="s-contact__list">
              <li v-for=' (vc, index) in Vitrine.ereputation.data ' :key="vc.url"><a v-if='index < 3 && vc.lien != ""'
                  :href="vc.lien">{{ vc.title }}</a></li>

            </ul>
            <!-- {{ parse(Vitrine.contactUs.data[3].description) }} -->
          </div>

          <div class="column lg-4 md-12 stack-on-900 s-contact__block-number">
            <h5 class="with-top-line">Contact Us</h5>
            <ul class="s-contact__list">
              <li v-for='vc in Vitrine.contactUs.contactUsPhone' :key="vc.text"><a :href="verfiSTNumber(vc.text)">{{
                  vc.text
              }}</a></li>


            </ul>
          </div>

        </div> <!-- end s-contact__infos -->

        <div class="row s-contact__bottom">

          <div class="column lg-5 tab-12 s-contact__mail-block">
            <a href="mailto:#0" class="btn btn--stroke btn--mail">
              Let's Talk
            </a>
          </div>

          <div class="column lg-7 tab-12 s-contact__subscribe">
            <h5>Subscribe</h5>

            <div class="subscribe-form">
              <form id="mc-form" class="mc-form" novalidate="true">
                <input type="email" name="EMAIL" id="mce-EMAIL" class="u-fullwidth text-center"
                  placeholder="Your Email Address"
                  title="The domain portion of the email address is invalid (the portion after the @)."
                  pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
                  required="">
                <input type="submit" name="subscribe" value="Subscribe" class="btn btn--primary u-fullwidth">
                <!-- <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_cdb7b577e41181934ed6a6a44_9a91cfe7b3" tabindex="-1" value=""></div> -->
                <div class="mc-status"></div>
              </form>
            </div>
          </div>

        </div> <!-- end s-contact__button -->


      </section> <!-- end contact -->

    </section>
    <!-- end s-content -->


    <!-- footer
        ================================================== -->
    <footer id="colophon" class="s-footer" v-if='statusF'>
      <div class="row">
        <div class="column lg-12 ss-copyright">
          <span>© Copyright {{ parse(Vitrine.footer.data[0].text) }}</span>
          <span> <a href="https://gessiia.com">Pubx-{{ date }}</a></span>
          <span>Propulser par <a href="https://gessiia.com">GESSIIA GROUP</a></span>
        </div>
      </div>

      <div class="ss-go-top">
        <a class="smoothscroll" title="Back to Top" href="#top">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
            <path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"></path>
          </svg>
        </a>
      </div> <!-- end ss-go-top -->
    </footer> <!-- end s-footer -->


  </div> <!-- end s-pagewrap -->


  <!-- photoswipe background
    ================================================== -->
  <div aria-hidden="true" class="pswp" role="dialog" tabindex="-1">

    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">

      <div class="pswp__container">
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
      </div>

      <div class="pswp__ui pswp__ui--hidden">
        <div class="pswp__top-bar">
          <div class="pswp__counter"></div><button class="pswp__button pswp__button--close"
            title="Close (Esc)"></button> <button class="pswp__button pswp__button--share" title="Share"></button>
          <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button> <button
            class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
          <div class="pswp__preloader">
            <div class="pswp__preloader__icn">
              <div class="pswp__preloader__cut">
                <div class="pswp__preloader__donut"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
          <div class="pswp__share-tooltip"></div>
        </div><button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
        <div class="pswp__caption">
          <div class="pswp__caption__center"></div>
        </div>
      </div>

    </div>
  </div>




</template>   
<style>
.imgD {
  height: 100px;
  width: 100px;
  max-width: 50px;
  margin-left: 5px;
  margin-right: 5px;
}

img {
  /* max-width: 100%; */
  /* height: auto; */
}
</style>
<script>
import { RequestApi } from '@/boot/RequestApi';
import { onMounted, ref, computed } from '@vue/runtime-core';
// import router from '../router';
import { useMeta } from 'vue-meta'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';


import 'swiper/css/scrollbar';
// Import Swiper styles
import 'swiper/css';
export default {
  name: 'App',
  components: {
    Swiper,
    SwiperSlide,
    // Header, Footer
  },

  beforeCreate() {
    const body = document.getElementsByTagName("body")[0];

    body.classList.remove("bg-gray-100");
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://oss.maxcdn.com/respond/1.4.2/respond.min.js')
    document.head.appendChild(externalScript)



  },
  methods: {
    redirect() {
      this.$router.replace({ name: 'invalidVitrine' });

    }
  },
  setup() {

    let loading0 = ref(true);
    let Vitrine = ref(null);

    onMounted(async () => {
      console.log('mounted00000')

      await getVitrineUser();

      console.log('mounted')

    });


    function isHTML(str) {
      var a = document.createElement('div');
      a.innerHTML = str;

      for (var c = a.childNodes, i = c.length; i--;) {
        if (c[i].nodeType == 1) return true;
      }

      return false;
    }
    const parse = (data) => {
      if (isHTML(data)) {
        console.log('data', data)
        var parser = new window.DOMParser();
        let parsee = parser.parseFromString(data, 'text/html').body.firstChild.innerHTML
        if (isHTML(parsee)) {
          console.log('ddsd')
          return parse(parsee);
        }
        return parsee;
      }
      else {
        return data
      }


    }
    const openMenu = () => {
      let menu = document.getElementById('menuNav');
      menu.style.transform = 'translateX(0px)';
      menu.style.transitionProperty = 'transform';
      menu.style.transitionDuration = '0.4s';
      console.log(menu)
    }
    const closeMenu = () => {
      let menu = document.getElementById('menuNav');
      menu.style.transform = 'translateX(10000px)';
      menu.style.transitionProperty = 'transform';
      menu.style.transitionDuration = '0.4s';
      console.log(menu)
    }
    const getVitrineUser = async () => {
      // console.log(window.location.pathname.split('/'))
      // var data = {
      //   Vitrine: window.location.pathname.split('/')[1
      //   ]
      // }
      const body = document.getElementsByTagName("body");
      let script = document.createElement('script')
      let script0 = document.createElement('script')
      console.log(body)
      script0.setAttribute('src', 'assets/js/plugins.js')
      script.setAttribute('src', 'assets/js/main.js')

      body[0].appendChild(script0)
      body[0].appendChild(script);
      let urlFInal = ref('');
      var url = window.location.href;


      if (url.includes('www')) {

        urlFInal.value = url.split('.')[1]
      } else {


        urlFInal.value = url.split('.')[0].split('//')[1];
      }



      // if (el.includes('http://')) {

      //   if (el.includes('www')) {
      //     urlFInal.value = el.split('http://')[1]
      //   } else if (el.includes('https://')) {
      //     urlFInal.value = el.split('https://')[1]
      //   } else {
      //     urlFInal.value = el
      //   }
      // } else if (el.includes('https://')) {
      //   urlFInal.value = el.split('https://')[1]
      // } else {
      //   urlFInal.value = el
      // }
      console.log('urlFInal', urlFInal.value);
      const req = await new RequestApi().getVitrineInfo(urlFInal.value)
      console.log(req.data)
      // const contain = await makeRequest("POST", '/Vitrine/user', data);

      // if (contain) {
      //   console.log(contain);
      //   let script = document.createElement('script')
      //   let script0 = document.createElement('script')

      //   script0.setAttribute('src', 'assets/js/plugins.js')
      //   script.setAttribute('src', 'assets/js/main.js')
      //   document.head.appendChild(script)
      //   document.head.appendChild(script0)
      Vitrine.value = req.data;
      //   console.log(Vitrine.value)
      getElement(req)
      // }
    };

    let a = ref();

    function getElement(req) {
      if (req.status) {

        statusH.value = (Vitrine.value.header.status);
        statusA.value = (Vitrine.value.aboutUs.status);
        statusS.value = (Vitrine.value.service.status);
        statusP.value = (Vitrine.value.galerie.status);
        statusC.value = (Vitrine.value.contactUs.status);
        statusT.value = (Vitrine.value.temoignage.status);
        statusF.value = (Vitrine.value.footer.status);
        loading0.value = !loading0.value
        // document.title = Vitrine.value.title;
        console.log(Vitrine.value.metaDescription)
        let linRel = document.querySelector('link')
        linRel.setAttribute('rel', 'icon')
        linRel.setAttribute('type', 'image/x-icon')
        linRel.setAttribute('href', Vitrine.value.header.favIcon.url)
        document.head.appendChild(linRel);
      }


    }

    let statusH = ref(false);
    let statusA = ref(false);
    let statusS = ref(false);
    let statusP = ref(false);
    let statusC = ref(false);
    let statusT = ref(false);
    let statusF = ref(false);
    a.value = useMeta(computed(() => ({
      title: Vitrine.value ? Vitrine.value.title : '',
      titleTemplate: 'GESSIIA SARL',
      htmlAttrs: {
        lang: 'FR',
        amp: true
      }, description:

        { name: 'description', content: Vitrine.value ? Vitrine.value.metaDescription : '' },
      keywords: { name: 'keywords', content: Vitrine.value ? Vitrine.value.metaKey : '' },

    })))
    /**
     * contient @ => 0,
     * contient uniquement nombre =>1 ,
     * autre => 2,
     */
    const verfiSTNumber = (val) => {
      return (isNaN(val) ? val.includes('@') ? 'mailto:' + val : '' : 'tel:' + val);
    }
    function verifImgExist(src) {
      console.log(src)
      const img = new Image();
      img.src = src;
      let finalImg = ref("../assets/images/logo.svg")
      if (img.complete) {

        console.log('8888***')
        return src;
      } else {
        img.onload = () => {
          console.log('sssss***')
          finalImg.value = src

        };

        img.onerror = () => {

          console.log('errro***')
          // finalImg.value = "../../../public/assets/img/default_images.jpg";

        };
      }
      return finalImg.value;


    }
    return {
      date: new Date().getFullYear(), verfiSTNumber, verifImgExist,
      statusF, a, openMenu, closeMenu,
      Vitrine, loading0, parse, statusH, statusA, statusS, statusC, statusP, statusT

    };
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
