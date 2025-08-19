/*
 * index.js
 * すべてのページで共通の動作を実装するファイル
 */

/**
 * HTML内の指定したセレクタに、要素を挿入する関数。
 * @param {*} targetSelector  ドキュメント内に挿入する箇所のセレクタ
 * @param {*} element         挿入する要素
 * @returns 
 */
function InsertContent(targetSelector, element)
{
  if (!element) {
    console.error(`Element <${element}> is null.`);
    return;
  }
  document.querySelector(targetSelector).innerHTML = element.innerHTML;
}

/**
 * 別HTMLファイルの指定したセレクタの要素を取得し、ドキュメント内の指定したセレクタへ挿入する関数。
 * @param {*} targetSelector  ドキュメント内に挿入する箇所のセレクタ
 * @param {*} filePath        挿入するHTMLファイルのパス
 * @param {*} element         挿入するHTMLファイル内のセレクタ
 */
function InsertContentFromFile(targetSelector, filePath, element)
{
  fetch(filePath)
    .then(response => response.text())
    .then(html => {
      // HTML文字列をDOMに変換
      const perser = new DOMParser();
      const doc = perser.parseFromString(html, 'text/html');
      
      // 取得したHTMLから指定したセレクタの要素を取得
      const insertElement = doc.querySelector(element);
      if(!insertElement)
      {
        console.error(`Element <${element}> not found in ${filePath}.`);
        return;
      }

      // ドキュメント内の指定したセレクタに要素を挿入
      InsertContent(targetSelector, insertElement);
    })
    .catch(error => console.error('Error fetching content:', error));
}

// ページのルートパスを取得
const rootPath = location.origin;

// header.htmlをheaderセレクタに挿入
InsertContentFromFile('header', rootPath + "/header.html", 'header');

// footer.htmlをfooterセレクタに挿入
InsertContentFromFile('footer', rootPath + "/footer.html", 'footer');