## toString

### 特点

- 在toString中可定制格式

### 使用
```php title = toString
class Account {

    public __toString(){
        return $this->username;
    }

}
```

### 应用场景

- 测试对象中的数据是否正确
    - 在调试时打印对象查看属性的值是否正确
