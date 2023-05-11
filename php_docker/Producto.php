<?php
class Producto
{
    const IVA_GENERAL = 0.21;

    //Propiedades
    public string $name;
    protected string $brand;
    private int $price;

    // Constructor
    function __construct(string $name, string $brand, int $price)
    {
        $this->name = strtolower($name);
        $this->brand = $brand;
        $this->price = $price;
    }

    // Métodos de la clase
    function getName()
    {
        return $this->name;
    }

    function setName($name)
    {
        $this->name = strtolower($name);
    }

    function setBrand($brand)
    {
        $this->brand = $brand;
    }

    function getBrand()
    {
        return $this->brand;
    }

    function setPrice($price)
    {
        $this->price = $price;
    }

    function getPrice()
    {
        return $this->price;
    }

    function getFullPrice()
    {
        return "El precio con IVA es: " . $this->price * (1 + self::IVA_GENERAL);
    }

    function getFullStatement()
    {
        return "El producto " . $this->name . " de la marca " . $this->brand . " tiene un precio de " . $this->price;
    }

    function toArray()
    {
        $array = [
            "name" => $this->name,
            "brand" => $this->brand,
            "price" => $this->price,
        ];

        return var_dump($array);
    }
}

$product1 = new Producto("SWITCH", "Nintendo", 259);

echo $product1->toArray();
echo "<br><br>" . $product1->getName();
echo "<br><br>" . $product1->getBrand();
echo "<br><br>" . $product1->getPrice();
echo "<br><br>" . $product1->getFullPrice();
echo "<br><br>" . $product1->getFullStatement();
