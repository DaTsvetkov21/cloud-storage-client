<template>
    <v-main>
      <v-container>
        <create v-if="showCreateFolders" @showCreateFolders="showCreateFolders = $event"></create>
        <v-row>
        <v-btn plain style="margin: 20px 0 20px 12px;" @click="changeView('table')">Table</v-btn>
        <v-btn plain style="margin: 20px 0;" @click="changeView('net')">Net</v-btn>
        <v-spacer/>
        <v-btn plain style="margin: 20px 12px 20px 0;" @click="showCreateFolders = true">+ Create</v-btn>
        </v-row>
        <div v-if="view === 'net'">
          <v-row>
            <v-col
                v-for="folder in folders"
                :key="folder.name"
                cols="1"
            >
              <v-btn plain style="height: 100%">
                <div style="display: flex; flex-direction: column;">
                <v-icon x-large>folder</v-icon>
                <span>{{ folder.name }} </span>
                </div>
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <div v-if="view === 'table'">
          <v-simple-table>
            <template v-slot:default>
              <thead>
              <tr>
                <th class="text-left">
                  Folder name
                </th>
                <th class="text-right">
                  File size
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="folder in folders"
                  :key="folder.name"
              >
                <td><v-icon>folder</v-icon> {{ folder.name }}</td>
                <td class="text-right">{{ folder.size }}</td>
              </tr>
              </tbody>
            </template>
          </v-simple-table>
<!--            <v-col-->
<!--                v-for="n in 20"-->
<!--                :key="n"-->
<!--                cols="1"-->
<!--            >-->
<!--              <v-btn plain >-->
<!--                <div style="display: flex; flex-direction: column">-->
<!--                  <v-icon x-large>folder</v-icon>-->
<!--                  <span>{{ folderName }} </span>-->
<!--                </div>-->
<!--              </v-btn>-->
<!--            </v-col>-->
        </div>
      </v-container>
    </v-main>
</template>


<script src="../ts/storage.ts" lang="ts"/>

<style>
.blackout {
  background:rgba(0, 0, 0, 0.7)
}
</style>