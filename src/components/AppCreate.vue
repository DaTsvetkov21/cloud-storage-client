<template>
  <v-container style="position: absolute; height: 100%;">
      <v-layout align-center justify-center style="position: sticky; top: 35%; z-index: 999;">
        <v-flex xs12 sm8 md4>
          <v-card elevation="15"
                  v-click-outside="hiddenPopup"
                  @keydown.esc="hiddenPopup">
            <v-toolbar elevation="0">
              Create folder<v-spacer/>
              <v-btn plain @click="hiddenPopup">
                <v-icon>close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-form>
              <v-col style="padding: 0 30px; margin-top: 30px">
                <v-text-field
                autofocus
                label="Folder name"
                :rules="folder"
                ></v-text-field>
                <v-row style="margin: 20px 0">
                  <v-spacer/>
                  <v-btn plain style="margin: 20px 5px">Create</v-btn>
                  <v-btn plain style="margin: 20px 5px" @click="hiddenPopup">Cancel</v-btn>
                </v-row>
              </v-col>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>

</template>
<script src="../ts/create.ts" lang="ts"/>


