let name = prompt("Введите ваше имя") // Инициализируем переменную name значением, введенным пользователем в модальное окно
if (!name || name=="null") // Условие 
	document.write("Привет, незнакомец!") // Если пользователь ничего не вписывал, то программа выдаст это.
	else // Иначе
		document.write("Привет, ", name,"!"); // Выводит на экран "Привет, переменную name введённую пользователем, !"
