import Produto from '../models/produtos.model.js';

class ProdutosServices {
  async todosProdutos() {
    const produtos = await Produto.find();

    if (produtos.length === 0) {
      throw { status: 404, message: 'Nenhum produto cadastrado' };
    }

    return produtos;
  }

  async produtoPorId(id) {
    const atualProduto = await Produto.findById(id);

    return atualProduto;
  }

  async criarNovoProduto(
    tipo,
    marca,
    modelo,
    descricao,
    cor,
    condicao,
    foto,
    preco,
    garantia,
  ) {
    const novoProduto = {
      tipo,
      marca,
      modelo,
      descricao,
      cor,
      condicao,
      foto,
      preco,
      garantia,
    };

    const produto = await Produto.create(novoProduto);
    return produto;
  }

  async atualizarProduto(
    id,
    tipo,
    marca,
    modelo,
    descricao,
    cor,
    condicao,
    foto,
    preco,
    garantia,
  ) {
    const produtoAtualizado = {
      tipo,
      marca,
      modelo,
      descricao,
      cor,
      condicao,
      foto,
      preco,
      garantia,
    };

    const produto =
      (await Produto.updateOne({ _id: id }, produtoAtualizado)) &&
      (await Produto.findById(id));

    return produto;
  }

  async deletarProduto(id) {
    const produto = await Produto.findByIdAndDelete(id);

    return produto;
  }
}

export default ProdutosServices;
