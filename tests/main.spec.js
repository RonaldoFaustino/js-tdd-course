
describe('Main', function() {
    describe('Method A', function() {
        context('Case 1', function() {
            it.skip('should happen', function() {
                // espera que aconteça
                // Entra de dados / metodo de soma(2,2)
                // Espera que retorne (4)
                throw new Error('just on error');
            });
        });

        context.only('Case 2', function() {
            it('should happen 2', function() {
                // espera que aconteça
                // Entra de dados / metodo de soma(2,2)
                // Espera que retorne (4)
                throw new Error('just on error 2');
            });

            it('should happen 3', function() {
                // espera que aconteça
                // Entra de dados / metodo de soma(2,2)
                // Espera que retorne (4)

            });
        });
    });

    describe('Method B', function() {

    });
});
