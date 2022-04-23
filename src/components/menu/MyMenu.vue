<template>
  <nav class="menu">
    <ul>
      <li>
        <a @click="() => this.$router.push({ path: '/' })">Dashboard</a>
      </li>
      <li>
        <a @click="() => this.$router.push({ path: '/controle-de-produtos' })">Produtos</a
        >
      </li>
      <li>
        <a @click="() => this.$router.push({ path: '/controle-de-clientes' })">Clientes</a
        >
      </li>
    </ul>
    <div class="btn-sair">
      <ul>
        <li>
          <a @click="() => this.$router.push({ path: '/login' })">Sair</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.menu {
  display: flex;
  justify-content: space-between;
  background-color: #333;
  padding: 1em;
}

.menu ul {
  display: flex;
  list-style: none;
  align-items: center;
}

.menu ul li {
  margin-right: 1em;
}

.menu ul li a {
  cursor: pointer;
  color: #fff;
  text-decoration: none;
}

.menu ul li a:hover {
  color: #ffbb33;
}

.btn-sair {
  float: right;
  margin-right: 10px;
}
</style>