import { DownloadUtils } from '.'

describe('DownloadUtils', () => {

  let spyClick: any
  let spyRemoveChild: any

  beforeEach(() => {
    spyClick = jest.fn()
    spyRemoveChild = jest.fn()
    Object.defineProperty(document, 'createElement', {
      writable: true,
      value: () => ({
        click: spyClick
      })
    })

    Object.defineProperty(document, 'body', {
      writable: true,
      value: {
        removeChild: spyRemoveChild
      }
    })

    Object.defineProperty(URL, 'createObjectURL', {
      writable: true,
      value: jest.fn()
    })
    Object.defineProperty(URL, 'revokeObjectURL', {
      writable: true,
      value: jest.fn()
    })
  })


  describe('downloadJson', () => {
    test('properly creates and call an anchor', () => {
      // Declaration
      const filename = 'myfile.json'
      const content = { data: 'data' }
      // Execution
      DownloadUtils.downloadJson(filename, content)
      // Assertion
      expect(spyClick).toHaveBeenCalledTimes(1)
    })
  })
})
