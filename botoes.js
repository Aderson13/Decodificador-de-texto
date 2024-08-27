function limparTexto(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z\s]/g, "")
        .toLowerCase();
}

function criptografar() {
    let texto = document.getElementById("inputTexto").value;
    texto = limparTexto(texto);
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputTexto").value = textoCriptografado;               
}

function descriptografar() {
    let texto = document.getElementById("inputTexto").value;
    texto = limparTexto(texto);
    let textoDescriptografado = texto
        .replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/ai/g, "a")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e");
    document.getElementById("outputTexto").value = textoDescriptografado;               
}

function copy() {
    let copyText = document.querySelector("#outputTexto");
    copyText.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}

document.querySelector("#copy").addEventListener("click", copy);
