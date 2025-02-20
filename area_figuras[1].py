figura = input('seleccione la figura para calcular, 1 para rombo: para rectangulo 2: para cuadrado 3: trapecio 4')
pi= 3.141516
var1= int(input("ingrese valor"))
var2= int(input("ingrese valor"))
var3=(2)
var4= int(input("ingrese valor"))

match figura:
    case"1":
        res = ((var1*var2)/2)
        print ("el area del rombo es:",res)
    case"2":
        res = (var1*var2)
        print ("el area del rectangulo es:",res)
    case"3":
        res = var1*var4
        print ("el area del cuadrado es:",res)
    case"4":
        res = (((var1+var2)*var4)/var3)
        print ("el area del trapecio es:",res)
        

