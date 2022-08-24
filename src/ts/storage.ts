// @ts-ignore
import create from "@/components/AppCreate";

export default {
    name: 'storage',
    data() {
        return {
            show: false,
            folderName: 'hello',
            auth: false,
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
            console.log('1')
        },
    },
    beforeMount(){
        if (!window.localStorage.getItem('token')) {
            window.history.pushState("No auth", "Cloud Storage", "/auth")
            location.reload();
            console.log('null')
        }
        else {
            console.log('full')
            window.history.pushState("object or string", "Title", "/")
            this.show = true
        }
    },
}
