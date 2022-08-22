<template>
  <div>
    <div>
      <v-navigation-drawer app absolute temporary v-model="drawer" class="hidden-md-and-up">
      <v-list>
        <v-list-item to="/singin" v-if="!token">
            <v-icon>login</v-icon>
            Sing in
          </v-list-item>
          <v-list-item to="/singup" v-if="!token">
            <v-icon>lock_open</v-icon>
            Sing up
          </v-list-item>
          <v-list-item to="/" v-if="token" @click="removeToken">
            <v-icon>logout</v-icon>
            Log out
          </v-list-item>
      </v-list>
      </v-navigation-drawer>
    </div>
    <div>
      <v-toolbar app >
        <v-btn plain @click="drawer = !drawer" class="hidden-md-and-up">
            <v-icon>fas fa-list</v-icon>
        </v-btn>
        <v-btn plain to="/">
            <v-toolbar-title v-text="'Cloud Storage'"></v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down" style="cursor:pointer">
          <v-btn plain to="/singin" v-if="!token">
            <v-icon>login</v-icon>
            Sing in
          </v-btn>
          <v-btn plain to="/singup" v-if="!token">
            <v-icon>lock_open</v-icon>
            Sing up
          </v-btn>
          <v-btn plain to="/" v-if="token" @click="removeToken">
            <v-icon>logout</v-icon>
            Log out
          </v-btn>
<!--          <v-btn plain v-for="(item,i) in headerButton" :key="`toolbarButton${i}`" :to="item.route">-->
<!--            <v-icon left v-html="item.icon"></v-icon>-->
<!--            {{item.title}}-->
<!--          </v-btn>-->
        </v-toolbar-items>
      </v-toolbar>
    </div>
  </div>
</template>

<script src="../ts/header.ts">

</script>

<style>
</style>