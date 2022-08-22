// import Vue from "vue";

export default {
    name: "AppCreate",
    data() {
        return {
            showCreateFolders: false,
            folder: [
                v => !!v || 'Folder name is required',
            ],
        }
    },
    methods: {
        hiddenPopup() {
            this.showCreateFolders = false
            this.$emit('showCreateFolders', this.showCreateFolders)
        },

    },
}
