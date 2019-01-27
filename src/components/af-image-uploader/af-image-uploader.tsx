import { Component, Event, EventEmitter, Method, Prop, State } from '@stencil/core';

interface IFileReaderEventTarget extends EventTarget {
    result: string;
}

interface IFileReaderEvent extends Event {
    target: IFileReaderEventTarget;
    getMessage(): string;
}

/**
 * Drag and drop image loader web component.
 * Also allows selecting the image with open file dialog.
 */
@Component({
    shadow: true,
    styleUrl: 'af-image-uploader.css',
    tag: 'af-image-uploader',
})
export class AfImageUploader {
    /**
     * Raised when the upload has finished
     */
    @Event() public change: EventEmitter<File>;
    /**
     * Raised when the file tried to upload was in wrong format
     */
    @Event() public invalidformat: EventEmitter<string>;
    /**
     * Raised when the image has finished to load
     */
    @Event() public load: EventEmitter<File>;

    /**
     * Width of the component
     */
    @Prop() public width: string = '100%';
    /**
     * Height of the component
     */
    @Prop() public height: string = '300px';
    /**
     * Icon source image (svg, png, jpg, gif, ...)
     */
    @Prop() public iconSrc: string = './assets/upload-cloud-flat.svg';
    /**
     * The color when it is active
     */
    @Prop() public activeColor: string = 'green';

    /**
     * The default color
     */
    @Prop() public baseColor: string = '#ccc';

    /**
     * The hover outline color
     */
    @Prop() public hoverOutlineColor: string = '#aaa';

    /**
     * The overlay color
     */
    @Prop() public overlayColor: string = 'rgba(255,255,255,0.5)';

    @State() private dragging: boolean = false;
    @State() private imageSrc: string = '';
    private file: any;
    private imageUploaderLbl: HTMLElement;
    private iconImg: HTMLElement;
    private previewImg: HTMLElement;

    constructor() {
        window.ondragover = e => e.preventDefault();
    }

    /**
     * Reset the component to void state
     */
    @Method() public reset(): void {
        this.iconImg.style.opacity = '1';
        this.previewImg.style.opacity = '0';
        this.dragging = false;
        this.imageSrc = '';
        this.file = undefined;
    }

    /**
     * Obtains the selected or dropped file if any, or `undefined` if none available
     * @returns selected or dropped file
     */
    @Method() public async getFile(): Promise<File> {
        return this.file;
    }

    private handleDragEnter() {
        this.dragging = true;
    }

    private handleDragLeave() {
        this.dragging = false;
    }

    private handleDrop(e: Event) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    }

    private handleReaderLoaded(e: IFileReaderEvent) {
        this.imageSrc = e.target.result;
        this.change.emit(this.file);
    }

    private handleInputChange(e: any) {
        // May come from handleDrop or input onChange
        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        const pattern = /image-*/;
        const reader = new FileReader();

        if (!file) {
            this.imageSrc = '';
            console.error('image-uploader invalid file:', e.dataTransfer, e.target);
            return;
        }
        if (!file.type.match(pattern)) {
            console.error('image-uploader invalid format:', file.type);
            this.invalidformat.emit(file.type);
            return;
        }

        this.iconImg.style.opacity = '1';
        this.previewImg.style.opacity = '0';

        reader.onload = (fr: any) => this.handleReaderLoaded(fr);
        reader.readAsDataURL(file);
        this.file = file;
    }

    private handleImageLoad() {
        this.iconImg.style.opacity = '0';
        this.previewImg.style.opacity = '1';
        this.load.emit(this.file);
        // this.iconColor = this.overlayColor;
    }
    private handleMouseIn (): void {
        this.imageUploaderLbl.style.outlineColor = this.hoverOutlineColor;
    }
    private handleMouseOut(): void {
        this.imageUploaderLbl.style.outlineColor = this.dragging ? this.activeColor : this.baseColor;
    }

    public render() {
        const outlineColor = this.dragging ? this.activeColor : this.baseColor;
        const labelStyle = {
            outlineColor,
            height: this.height,
            width: this.width,
        };
        const iconStyle = {
            color: (this.imageSrc.length > 0) ? this.overlayColor : outlineColor,
        };
        return (
            <label
                ref={(el: HTMLElement) => this.imageUploaderLbl = el}
                class='uploader'
                style={labelStyle}
                draggable={true}
                onDragOver={() => false}
                onDragEnter={() => this.handleDragEnter()}
                onDragLeave={() => this.handleDragLeave()}
                onDrop={(e: Event) => this.handleDrop(e)}
                onMouseEnter={() => this.handleMouseIn()}
                onMouseLeave={() => this.handleMouseOut()}
                >

                <img
                    ref={(el: HTMLElement) => this.iconImg = el}
                    class='iconImg'
                    role='icon'
                    aria-hidden='true'
                    style={iconStyle}
                    src={this.iconSrc} />

                <img
                    ref={(el: HTMLElement) => this.previewImg = el}
                    class='previewImg'
                    src={this.imageSrc}
                    onLoad={() => this.handleImageLoad()} />

                <input
                    name='file'
                    type='file'
                    accept='image/*'
                    onChange={(e: Event) => this.handleInputChange(e)}/>
            </label>);
    }
}
