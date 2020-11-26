/**
 * @file mofron-comp-three/index.js
 * @brief threejs component for mofron
 * @license MIT
 */
const THREE = require('three');
let three = null;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) 
     *                key-value: component config
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.name("Three");
            
	    /* init config */
            this.confmng().add("renderer", { type: 'object' });
            this.confmng().add("width", { type: 'number', init: 300 });
	    this.confmng().add("height", { type: 'number', init: 150 });
	    this.confmng().add("autoAnimate", { type: 'boolean', init: true });
            this.confmng().add("animateEvent", { type: 'event', list: true });
	    this.confmng().add("scene", { type: 'object' });
	    this.confmng().add("camera", { type: 'object' });

	    if (0 < arguments.length) {
                this.config(p1);
            }
	    three = this;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize threejs
     * 
     * @type private
     */
    afterRender () {
        try {
            super.afterRender();
            
	    this.renderer(
	        new THREE.WebGLRenderer({
                    canvas: this.rootDom()[0].getRawDom()
                })
            );
            this.renderer().setPixelRatio(window.devicePixelRatio);
	    this.renderer().setSize(this.width(), this.height());
	    if (true === this.autoAnimate()) {
                this.animate();
	    }
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts('canvas');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * threejs renderer object setter/getter
     * 
     * @param (object) threejs renderer
     * @return (object) threejs renderer
     * @type function
     */
    renderer (prm) {
        try {
            return this.confmng("renderer", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }

    /**
     * canvas width setter/getter
     * 
     * @param (number) px number
     * @return (number) px number
     * @type parameter
     */
    width (prm) {
        try {
            return this.confmng("width", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * canvas height setter/getter
     * 
     * @param (number) px number
     * @return (number) px number
     * @type parameter
     */
    height (prm) {
        try {
            return this.confmng("height", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * auto animate flag setter/getter
     * 
     * @param (boolean) true: call animation loop autometally
     *                  false: call animation loop by manually
     * @return (boolean) auto animate flag
     * @type parameter
     */
    autoAnimate (prm) {
        try {
            return this.confmng("autoAnimate", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * animate event functions
     * 
     * @param (function) animate event function
     * @param (mixed) animate event parameter
     * @return (array) animate event lists
     * @type parameter
     */
    animateEvent (fnc, prm) {
        try {
            return this.confmng("animateEvent", fnc, prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * animate loop function
     * it call render function if it was setted scene,camera.
     * 
     * @type function
     */
    animate () {
        try {
            let evt = three.animateEvent();
            for (let eidx in evt) {
                evt[eidx][0](evt[eidx][1]);
	    }

	    if ((null !== three.scene()) && (null !== three.camera())) {
                three.renderer().render(three.scene(), three.camera());
	    }
            
            window.requestAnimationFrame(three.animate);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * scene setter/getter
     * 
     * @param (object) threejs scene object
     * @return (object) threejs scene object
     * @type function
     */
    scene (prm) {
        try {
            return this.confmng("scene", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * camera setter/getter
     * 
     * @param (object) threejs camera object
     * @return (object) threejs camera object
     * @type function
     */
    camera (prm) {
        try {
            return this.confmng("camera", prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * threejs object getter
     * 
     * @return (object) threejs object
     * @type function
     */
    THREE () {
        try {
            return THREE;
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
}
/* end of file */
