function Bola(context) {
   this.context = context;
   this.x = 0;
   this.y = 0;
   this.velocidadeX = 0;
   this.velocidadeY = 0;

   // Atributos de desenho padrão
   this.cor = 'black';
   this.raio = 10;
}
Bola.prototype = {
   atualizar: function() {
      var ctx = this.context;

      if (this.x < this.raio || this.x > ctx.canvas.width - this.raio)
         this.velocidadeX *= -1;

      if (this.y < this.raio || this.y > ctx.canvas.height - this.raio)
         this.velocidadeY *= -1;

      this.x += this.velocidadeX;
      this.y += this.velocidadeY;
   },
   desenhar: function() {
      var ctx = this.context;
      
      // Guardar configurações atuais do contexto
      ctx.save();

      // Configurar o contexto de acordo com a bola
      ctx.fillStyle = this.cor;
 
      // Desenhar
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, false);
      ctx.fill();

      // Voltar às configurações anteriores
      ctx.restore();      
   },
   atirar: function(){
       var tiro = new Bola(this.context);
       tiro.x = this.x + 10;
       tiro.y = this.y + 10;
       tiro.raio = 2;
       tiro.cor = 'red';

       if(this.teclado.pressionada[SETA_ESQUERDA])
            tiro.velocidadeX = -20;
       else
            tiro.velocidadeY = 20;

       //Nao tenho como concluir nada na animacao
       this.animacao.novoSprite(tiro);
   }
}
