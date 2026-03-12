const { app, ipcMain } = require("electron");
const MainWindowFactory = require("./windows/MainWindowsFactory");

app.whenReady().then(() => {
    MainWindowFactory.createWindow("index.html");

    ipcMain.handle("window:open-page", async (_event, pageName) => {
        MainWindowFactory.createWindow(pageName);
        return { ok: true };
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});