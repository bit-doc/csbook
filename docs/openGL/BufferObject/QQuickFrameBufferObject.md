## QQuickFrameBufferObject

The QQuickFramebufferObject allows us to wrap custom OpenGL code in a QML item. The rendering gets redirected off screen to an OpenGL frame buffer object and Qt creates the required scene graph object to accomplish that. The following example shows the basic usage:

```c++
class FrameBufferTriangle : public QQuickFramebufferObject{public:   Renderer* createRenderer() const override;  ...};class FrameBufferTriangleRenderer : public QQuickFramebufferObject::Renderer{public:  void synchronize(QQuickFramebufferObject *item) override;   QOpenGLFramebufferObject *createFramebufferObject(const QSize &s) override;   void render() override  {    QOpenGLFunctions* f = QOpenGLContext::currentContext()->functions();    // use OpenGL functions f->glClearColor(1,1,1,0); ...
```
### 参考
[Integrating custom OpenGL rendering with Qt Quick via QQuickFramebufferObject](https://www.qt.io/blog/2015/05/11/integrating-custom-opengl-rendering-with-qt-quick-via-qquickframebufferobject)
[QQuickFrameBufferObject](https://www.oreilly.com/library/view/hands-on-high-performance/9781789531244/a5d0d818-f4cf-467f-8c79-49b0e7002b2c.xhtml)
[QQuickFramebufferObject ](https://stuff.mit.edu/afs/athena/software/texmaker_v5.0.2/qt57/doc/qtquick/qquickframebufferobject.html)
[learnopengl](https://learnopengl.com/Advanced-OpenGL/Framebuffers)