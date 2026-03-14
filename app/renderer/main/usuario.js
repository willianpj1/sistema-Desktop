const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', async () => {
    const data = {
        name: document.getElementById('name').value,
        cpf: document.getElementById('cpf').value,
        telefone: document.getElementById('telefone').value,
    };

    try {
        const result = await window.electronAPI.saveUsuario(data);
        console.log('cadastro realizado com sucesso:', result);
    } catch (error) {
        console.error('Erro ao cadastrar cliente', error);
    }
});