const saveButton = document.getElementById('save-button');

saveButton.addEventListener('click', async () => {
    const data = {
        name: document.getElementById('name').value,
        cpf: document.getElementById('cpf').value,
        telefone: document.getElementById('telefone').value,
    };

    try {
        const result = await window.electronAPI.savecliente(data);
        console.log('cadastro realizado com sucesso:', result);
        alert('cadastro realizado com sucesso:!');
    } catch (error) {
        console.error('Erro ao cadastrar cliente', error);
        alert('Erro ao cadastrar cliente!');
    }
});