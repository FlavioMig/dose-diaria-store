export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos:IProduto[] = [
    
    { id: 1, descricao: "Vitamina B12 com 60 cápsulas", preco: 89.90, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image1.jpg", quantidadeEstoque:10 },
    { id: 2, descricao: "Quitosana c/60 cp", preco: 70.50, descricaoPreco: "À vista no PIX,  ou no cartão até 3x s/juros", imagem: "assets/image2.jpg", quantidadeEstoque:10 },
    { id: 3, descricao: "Omega 3 1000mg c/ 120 cp", preco: 89.99, descricaoPreco: "À vista no PIX,  ou no cartão até 3x s/juros", imagem: "assets/image3.jpg", quantidadeEstoque:10 },
    { id: 4, descricao: "Melatonina 21mg c/60", preco: 59.99, descricaoPreco: "À vista no PIX ou no cartão até 3x s/juros", imagem: "assets/image4.jpg", quantidadeEstoque:10},
    { id: 5, descricao: "Magnésio Dimalato c/60", preco: 59.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image5.jpg", quantidadeEstoque:10 },
    { id: 6, descricao: "Biotina c/60", preco: 79.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image6.jpg", quantidadeEstoque:10 },
    { id: 7, descricao: "Magnésio Treonato c/60", preco: 79.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image7.jpg", quantidadeEstoque:10 },
    { id: 8, descricao: "Magnésio Treonato c/60", preco: 69.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image8.jpg", quantidadeEstoque:10 },
    { id: 9, descricao: "Vitamina C+D+Z", preco: 59.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image9.jpg", quantidadeEstoque:10 },
    { id: 10, descricao: "Vitamina para Homem c/60", preco: 89.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image10.jpg", quantidadeEstoque:10 },
    { id: 11, descricao: "Vitamina para Homem Senior", preco: 99.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image11.jpg", quantidadeEstoque:10 },
    { id: 12, descricao: "Vitamina para Mulher 50+, com ácido Hialurônico", preco: 99.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image12.jpg", quantidadeEstoque:10 },
    { id: 13, descricao: "Coenzima Q10 c/60", preco: 59.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image13.jpg", quantidadeEstoque:10 },
    { id: 14, descricao: "Vitamina C de 1000 c/ 60", preco: 49.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image14.jpg", quantidadeEstoque:10 },
    { id: 15, descricao: "Quitosana c/60", preco: 69.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image15.jpg", quantidadeEstoque:10 },
    { id: 16, descricao: "Quitosana 500 c/60", preco: 79.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image16.jpg", quantidadeEstoque:10 },
    { id: 17, descricao: "Desodalina c/ 60", preco: 99.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image17.jpg", quantidadeEstoque:10 },
    { id: 18, descricao: "Vitamina C+Zinco", preco: 49.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image18.jpg", quantidadeEstoque:10 },
    { id: 19, descricao: "Vitamina D+K c/60", preco: 59.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image19.jpg", quantidadeEstoque:10 },
    { id: 20, descricao: "Vitamina K c/60", preco: 69.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image20.jpg", quantidadeEstoque:10 },
    { id: 22, descricao: "Vitamina D3 1000", preco: 59.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image21.jpg", quantidadeEstoque:10 },
    { id: 23, descricao: "Vitamina Memory c/60", preco: 79.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image22.jpg", quantidadeEstoque:10 },
    { id: 24, descricao: "Ginko Biloba 500 c/60", preco: 79.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image23.jpg", quantidadeEstoque:10 },
    { id: 25, descricao: "Espinheira Santa c/ 120", preco: 59.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image24.jpg", quantidadeEstoque:10 },
    { id: 26, descricao: "Selenium c/60", preco: 59.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image25.jpg", quantidadeEstoque:10 },
    { id: 27, descricao: "Zinco Quelato c/60", preco: 69.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image26.jpg", quantidadeEstoque:10 },
    { id: 28, descricao: "Zinco Quelato 28mg c/60", preco: 79.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image27.jpg", quantidadeEstoque:10 },
    { id: 29, descricao: "Omega 3 c/120", preco: 79.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image28.jpg", quantidadeEstoque:10 },
    { id: 30, descricao: "Nutricaps A/Z c/60", preco: 59.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image29.jpg", quantidadeEstoque:10 },
    { id: 31, descricao: "Silício A/D/C/E 500mg c/60", preco: 69.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image30.jpg", quantidadeEstoque:10 },
    { id: 32, descricao: "Vitamina B12 sublingual", preco: 99.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image31.jpg", quantidadeEstoque:10 },
    { id: 15, descricao: "Vitamina B12 (Metilcobalamina) sublingual c/30", preco: 69.99, descricaoPreco: "À vista no PIX, ou no cartão até 3x s/juros", imagem: "assets/image32.jpg", quantidadeEstoque:10 },
]
