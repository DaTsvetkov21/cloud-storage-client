<template>
  <div>
    <v-container fluid fill-height style="margin-top: 100px">
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12 rounded-lg">
            <v-toolbar elevation="0">
              <v-btn plain @click="setValueBtn('Sing In')">Sing in</v-btn>
              <v-btn plain @click="setValueBtn('Sing Up')">Sing up</v-btn>
            </v-toolbar>
            <v-form>
              <v-col style="padding: 0 30px; margin-top: 30px">
                <v-text-field
                    autofocus
                    outlined
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required>
                </v-text-field>
              </v-col>
              <v-col style="padding: 0 30px">
                <v-text-field
                    outlined
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    required>
                </v-text-field>
              </v-col>
              <v-footer color="#fff">
                <v-spacer></v-spacer>
                <v-btn
                    class="ma-5"
                    text
                    @click="btn === 'Sing In' ? singIn({email, password}) : singUp({email, password}) ">
                  {{ btn }}
                </v-btn>
              </v-footer>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script src="../ts/Auth.ts"/>


