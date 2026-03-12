const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("openPage", 
    (pageName) => ipcRenderer.invoke("window:open-page", pageName)
);