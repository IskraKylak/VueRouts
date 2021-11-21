<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navar-content">
          <a href="/" class="logo">VUE_CLI</a>
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <router-link
                class="navbar-link"
                :title="link.title"
                :to="link.url"
                >{{ link.title }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>

  <router-view />
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Home", url: "/" },
        { title: "Shop", url: "/shop" },
      ],
    };
  },
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.navar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header {
  padding: 10px 0;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  width: 100%;
}

ul {
  list-style: none;
  li.navbar-item {
    padding: 0 10px;

    a {
      font-weight: bold;
      font-size: 14px;
      &.router-link-exact-active {
        color: orange;
      }
    }
  }
}

.navbar-list {
  display: flex;
  justify-content: space-between;
}
</style>
