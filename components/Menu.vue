<template>
  <div>
    <b-navbar toggleable="md" class="navbar mr-auto" type="dark">
      <b-navbar-brand tag="h1" class="mb-0" style="color:#eee" id="title-lg">
        <NuxtLink to="/" class="title" >
        <b-img src="https://placekitten.com/g/30/30" rounded="circle" alt="Kitten" />
          joão-lucas-freitas
        </NuxtLink>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" id="toggle"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto" style="color:#eee">
          <span class="item-menu">
            <NuxtLink to="/" class="title">
              <b>Início</b>
            </NuxtLink>
          </span>
          <span class="item-menu">
            <NuxtLink to="/posts" class="title">
              <b>Posts</b>
            </NuxtLink>
          </span>
          <span class="item-menu">
            <NuxtLink to="/editor" class="title">
              <b>Write</b>
            </NuxtLink>
          </span>
        </b-navbar-nav>    
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.navbar{
  border:1px solid #23272B;
  margin:1% auto;
  margin-top: 0;
  background-color:#1B1B1B;
  padding-left: 20px;
}
b-nav-item{
  color:#eee;
}
.title{
  color:#eee;
  text-decoration: none;
}
.item-menu{
  margin-left: 15px;
}
#title-lg{
  display: block;
}
.icon-toggle{
  display: table; position: static;
  font-size: 22px;
}
#toggle{
  padding:0;
  border:0;
  margin-right: 5px;
  color:#ffffff;
}

.list-menu-toogle{
  color: #23272B;
}

@media screen and (max-width:767px){
  .item-menu{
    margin-left: 0px;
    margin-top:25px;
  }
}

@media screen and (max-width:420px){
 #title-lg{
    font-size: 17px;
  }
}

@media screen and (max-width:325px){
 #title-lg{
    font-size: 15px;
  }
}

@media screen and (max-width:291px){
 #title-lg{
    font-size: 13px;
  }
}
</style>