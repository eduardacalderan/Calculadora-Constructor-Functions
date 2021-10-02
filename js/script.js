function Calculator() {
  //atributos:
  this.input = document.querySelector('.display')

  this.start = () => {
    this.buttonClicks()
    this.pressEnter()
  }

  this.pressEnter = () => {
    this.input.addEventListener('keyup', e => {
      if (e.keyCode === 13) this.calculate()
    })
  }

  //pegar o valor do botão clicado
  this.btnForInput = valor => {
    this.input.value += valor
    this.input.focus()
  }

  //limpar o campo do input
  this.clearInput = () => (this.input.value = '')

  //apagar um número
  this.dellNumber = () => (this.input.value = this.input.value.slice(0, -1))

  //calcular
  this.calculate = () => {
    let account = this.input.value

    try {
      account = eval(account)
      if (Number.isNaN(account) || typeof account !== 'number') {
        alert('Conta inválida!')
        return
      }

      this.input.value = account
    } catch (e) {
      alert('Conta inválida!')
      return
    }
  }

  //clicar no botão e executar suas ações
  this.buttonClicks = () => {
    document.addEventListener('click', e => {
      const el = e.target

      if (el.classList.contains('btn-num')) this.btnForInput(el.innerText)
      if (el.classList.contains('btn-clear')) this.clearInput()
      if (el.classList.contains('btn-del')) this.dellNumber()
      if (el.classList.contains('btn-eq')) this.calculate()
    })
  }
}

const calculator = new Calculator()
calculator.start()
