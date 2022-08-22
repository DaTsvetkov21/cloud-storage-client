// @ts-ignore
import create from "@/components/AppCreate";

export default {
    name: 'storage',
    data() {
        return {
            folderName: 'hello',
            showCreateFolders: false,
            view: localStorage.getItem('view'),
            folders: [
                {
                name: 'Folder',
                size: '123 kb'
                },
                {
                    name: 'Folder 2',
                    size: '1233 kb'
                },
                {
                    name: 'Folder 3',
                    size: '1245 kb'
                }

            ]
        }
    },
    components: {
        create
    },
    methods: {
        changeView(value) {
            this.view = value;
            localStorage.view = this.view
        },

    }
}
