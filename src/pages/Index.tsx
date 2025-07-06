import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [cart, setCart] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const products = [
    {
      id: 1,
      name: "Современный диван",
      price: 45000,
      image: "/img/6c151560-a1d3-446c-a30c-56a92b49e370.jpg",
      description: "Минималистичный диван в скандинавском стиле",
      category: "Мягкая мебель",
    },
    {
      id: 2,
      name: "Обеденный стол",
      price: 28000,
      image: "/img/bfee6a06-b6f2-4b68-9925-5e85b9c4739b.jpg",
      description: "Деревянный стол из массива дуба",
      category: "Столы",
    },
    {
      id: 3,
      name: "Офисное кресло",
      price: 15000,
      image: "/img/812d4096-8dde-4aa5-b857-bc51779c6a0d.jpg",
      description: "Эргономичное кресло для работы",
      category: "Кресла",
    },
  ];

  const addToCart = (productId: number) => {
    setCart((prev) => [...prev, productId]);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const removeFromFavorites = (productId: number) => {
    setFavorites((prev) => prev.filter((id) => id !== productId));
  };

  const removeFromFavorites = (productId: number) => {
    setFavorites((prev) => prev.filter((id) => id !== productId));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#2C3E50] text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">МЕБЕЛЬ</h1>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#catalog"
                className="hover:text-[#E74C3C] transition-colors"
              >
                Каталог
              </a>
              <a
                href="#about"
                className="hover:text-[#E74C3C] transition-colors"
              >
                О нас
              </a>
              <a
                href="#delivery"
                className="hover:text-[#E74C3C] transition-colors"
              >
                Доставка
              </a>
              <a
                href="#contacts"
                className="hover:text-[#E74C3C] transition-colors"
              >
                Контакты
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Icon name="Heart" size={20} />
                  {favorites.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-[#E74C3C] text-white text-xs">
                      {favorites.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Избранное</SheetTitle>
                  <SheetDescription>
                    Товары, которые вам понравились
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  {favorites.length === 0 ? (
                    <p className="text-gray-500">Нет избранных товаров</p>
                  ) : (
                    favorites.map((id) => {
                      const product = products.find((p) => p.id === id);
                      return product ? (
                        <div
                          key={id}
                          className="flex items-center space-x-4 p-4 border rounded-lg"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold">{product.name}</h4>
                            <p className="text-[#E74C3C] font-bold">
                              {product.price.toLocaleString()} ₽
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromFavorites(id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Icon name="X" size={16} />
                          </Button>
                        </div>
                      ) : null;
                    })
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Icon name="ShoppingCart" size={20} />
                  {cart.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-[#E74C3C] text-white text-xs">
                      {cart.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Корзина</SheetTitle>
                  <SheetDescription>Товары к покупке</SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-4">
                  {cart.length === 0 ? (
                    <p className="text-gray-500">Корзина пуста</p>
                  ) : (
                    <>
                      {cart.map((id, index) => {
                        const product = products.find((p) => p.id === id);
                        return product ? (
                          <div
                            key={index}
                            className="flex items-center space-x-4 p-4 border rounded-lg"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold">{product.name}</h4>
                              <p className="text-[#E74C3C] font-bold">
                                {product.price.toLocaleString()} ₽
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFromCart(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Icon name="X" size={16} />
                            </Button>
                          </div>
                        ) : null;
                      })}
                      <div className="pt-4 border-t">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-lg font-semibold">Итого:</span>
                          <span className="text-xl font-bold text-[#E74C3C]">
                            {cart
                              .reduce((sum, id) => {
                                const product = products.find(
                                  (p) => p.id === id,
                                );
                                return sum + (product?.price || 0);
                              }, 0)
                              .toLocaleString()}{" "}
                            ₽
                          </span>
                        </div>
                        <Button className="w-full bg-[#E74C3C] hover:bg-[#C0392B]">
                          Оформить заказ
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Icon name="User" size={20} />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Профиль</DialogTitle>
                  <DialogDescription>Войдите в свой аккаунт</DialogDescription>
                </DialogHeader>
                {!isLoggedIn ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@mail.ru"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Пароль</Label>
                      <Input id="password" type="password" />
                    </div>
                    <Button
                      className="w-full bg-[#E74C3C] hover:bg-[#C0392B]"
                      onClick={() => setIsLoggedIn(true)}
                    >
                      Войти
                    </Button>
                    <Button variant="outline" className="w-full">
                      Регистрация
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        Добро пожаловать!
                      </h3>
                      <p className="text-gray-600">user@example.com</p>
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full">
                        Мои заказы
                      </Button>
                      <Button variant="outline" className="w-full">
                        Настройки
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => setIsLoggedIn(false)}
                      >
                        Выйти
                      </Button>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-[#2C3E50] mb-6">
            Современная мебель для вашего дома
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Минималистичный дизайн, высокое качество и доступные цены. Создайте
            идеальное пространство с нашей коллекцией мебели.
          </p>
          <Button
            size="lg"
            className="bg-[#E74C3C] hover:bg-[#C0392B] text-white px-8 py-4"
          >
            Смотреть каталог
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section id="catalog" className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Популярные товары
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Icon
                      name="Heart"
                      size={20}
                      className={
                        favorites.includes(product.id)
                          ? "fill-[#E74C3C] text-[#E74C3C]"
                          : "text-gray-600"
                      }
                    />
                  </Button>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {product.description}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{product.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#E74C3C]">
                      {product.price.toLocaleString()} ₽
                    </span>
                    <Button
                      onClick={() => addToCart(product.id)}
                      className="bg-[#2C3E50] hover:bg-[#1A252F]"
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />В
                      корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-[#2C3E50] mb-12 text-center">
            Почему выбирают нас
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#E74C3C] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Быстрая доставка</h4>
              <p className="text-gray-600">
                Доставим ваш заказ в течение 1-3 дней по всей России
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#E74C3C] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Гарантия качества</h4>
              <p className="text-gray-600">
                Предоставляем гарантию на всю мебель до 5 лет
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#E74C3C] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Поддержка 24/7</h4>
              <p className="text-gray-600">
                Наша команда всегда готова помочь вам
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">МЕБЕЛЬ</h4>
              <p className="text-gray-300">
                Современная мебель для вашего дома
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Каталог</h5>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Диваны
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Столы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Кресла
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Шкафы
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Помощь</h5>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Оплата
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Возврат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@mebel.ru</p>
                <p>Москва, ул. Примерная, 123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Мебель. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
