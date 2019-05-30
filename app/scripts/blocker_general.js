/**
 * Overlay HTML for big teasers and articles
 * @type {string}
 */
const overlayHTML = `
    <div class="afdcontentblockedoverlay">
        <div class="afdcontentblockedoverlay_top">#AfDBlocker</div>
        <div class="afdcontentblockedoverlay_bottom">
            100% AfD-inhaltsfrei<br>
            Für Sie blockiert von<br>
            <img src="data:image/png;base64,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" alt="DIE PARTEI">
        </div>
    </div>
`;

/**
 * Overlay HTML for small teasers
 * @type {string}
 */
const overlayHTMLSmall = `
    <div class="afdcontentblockedoverlay">
        <div class="afdcontentblockedoverlay_top">#AfDBlocker</div>
    </div>
`;

/**
 * Convert HTML string to DOM Node
 * @param html {string}
 * @returns {Element}
 */
function parseHtml(html) {
    const parser = new DOMParser();
    const parsed = parser.parseFromString(html, 'text/html');
    const overlay = parsed.getElementsByClassName('afdcontentblockedoverlay')[0];
    return overlay;
}

/**
 * Overlay DOM Node
 * @type {Element}
 */
const overlayNode = parseHtml(overlayHTML);

/**
 * Overlay DOM Node for small teasers
 * @type {Element}
 */
const overlaySmallNode = parseHtml(overlayHTMLSmall);


/**
 * The blocker class searches for an xpath expression and blocks content on basis of css selectors
 */
export class Blocker {
    /**
     *
     * @param selectorList lst of css selectors and overlay types
     * @param xpathExpression xpath expression
     */
    constructor(selectorList, xpathExpression) {
        this.selectorList = selectorList;
        if (xpathExpression)
        {
            this.xpathExpression = xpathExpression;
        } else {
            this.xpathExpression = ".//*[contains(text(),'AfD') or contains(text(),'afd.') or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'alternative für deutschland') or contains(translate(text(), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'),'alternative fuer deutschland')]";
        }
    }

    modifyContent(elements) {
        console.log("#### Suche nach Inhalten ####");
        let nodeConfigurations =  [];
        for (let j = 0; j < elements.length; j++) {
            let element = elements[j];
            let iterator = document.evaluate(this.xpathExpression, element, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
            try {
                let node = iterator.iterateNext();
                while (node) {
                    console.log("Found AfD content");
                    for(let i = 0; i< this.selectorList.length; i++)
                    {
                        let selector = this.selectorList[i].selector;
                        let ancestorTeaser = node.closest(selector);
                        if (ancestorTeaser)
                        {
                            if (!ancestorTeaser.classList.contains('afdcontentblocked'))
                            {
                                nodeConfigurations.push({
                                    element: ancestorTeaser,
                                    type: this.selectorList[i].type
                                });
                            }
                            // Wrapper found
                            break;
                        }
                    }
                    node = iterator.iterateNext();
                }
            }
            catch (e)
            {
                console.error( 'Error: Document tree modified during iteration ' + e );
            }
        }
        addBlocker(nodeConfigurations);
    }

    watchPageForMutations() {
      let mutationObserver = new MutationObserver(mutations => {
        let addedNodes = [];
        for(let i=0; i<mutations.length; ++i) {
            // look through all added nodes of this mutation
            for(let j=0; j<mutations[i].addedNodes.length; ++j) {
                if (mutations[i].addedNodes[j].classList && !mutations[i].addedNodes[j].classList.contains('afdcontentblockedoverlay')) {
                    addedNodes.push(mutations[i].addedNodes[j]);
                }
            }
        }
        if (addedNodes.length > 0) {
          this.modifyContent(addedNodes);
        }
      });
      mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    }
}

/**
 * Add overlays to a list of node configurations
 * @param nodeConfigurations
 */
export function addBlocker(nodeConfigurations) {
    nodeConfigurations.forEach(function(nodeConfiguration) {
        console.log("Adding Blocker to wrapper");
        if (!nodeConfiguration.element.classList.contains('afdcontentblocked')) {
            nodeConfiguration.element.classList.add('afdcontentblocked');
            let overlay;
            if (nodeConfiguration.type === 'big') {
                overlay = overlayNode.cloneNode(true);
            } else {
                overlay = overlaySmallNode.cloneNode(true);
            }
            nodeConfiguration.element.insertBefore(overlay, nodeConfiguration.element.firstChild);
        }
    });
}

