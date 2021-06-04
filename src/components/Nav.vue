<template>
  <div>

    <nav class="main-navigation-wrapper bg-white lg:bg-transparent">

      <div class="container">

        <div class="main-navigation flex justify-between content-center items-center flex-wrap py-4">

          <div class="logo ">

            <img src="../assets/img/iroshandezilva-logo.svg" alt="Iroshan De Zilva UI UX Designer">

          </div>

          <div class="navigation-wrapper flex content-center flex-wrap hidden lg:block">

            <div class="navigation">

              <div class="menu-wrapper flex">

                <div class="menu-item active"><router-link to="/">Home</router-link></div>
                <div class="menu-item "><router-link to="/AboutMe">About Me</router-link></div>
                <div class="menu-item "><router-link to="/ContactMe">Go to Foo</router-link></div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </nav>


  </div>

</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>

</style>